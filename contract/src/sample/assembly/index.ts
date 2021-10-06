import { logging } from "near-sdk-core";
import { Game, games } from "./model";

export function playGame(guess: u16): Game {
  assert(guess >= 0 && guess <= 10, "Guessed value should be within 0 to 10");
  const game = new Game(guess);
  games.push(game);
  logging.log("Game successfully entered");
  return game;
}

export function getGames(): Game[] {
  const GAME_LIMIT = 10;
  const numMessages = min(GAME_LIMIT, games.length);
  const startIndex = games.length - numMessages;
  const result = new Array<Game>(numMessages);
  for (let i = 0; i < numMessages; i++) {
    result[i] = games[i + startIndex];
  }
  return result;
}
