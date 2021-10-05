import { context, logging, PersistentVector } from "near-sdk-as";
// import uuid from "as-uuid";

/**
 * Exporting a new class COntact so it can be used outside of this file.
 */

export const games = new PersistentVector<Game>("g");
@nearBindgen
export class Game {
  participant: string;
  correctNumber: u16;
  won: boolean;
  guess: u16;

  constructor() {
    this.participant = context.sender;
    this.correctNumber = <u16>(Math.random() * 10);
  }

  playGame(guess: u16): Game {
    assert(guess >= 0 && guess <= 10, "Guessed value should be within 0 to 10");
    const game = new Game();
    game.guess = guess;
    game.won = game.guess == game.correctNumber;
    games.push(game);

    logging.log("Game successfully entered");
    return game;
  }

  getGames(): Game[] {
    const GAME_LIMIT = 10;
    const numMessages = min(GAME_LIMIT, games.length);
    const startIndex = games.length - numMessages;
    const result = new Array<Game>(numMessages);
    for (let i = 0; i < numMessages; i++) {
      result[i] = games[i + startIndex];
    }
    return result;
  }
}
