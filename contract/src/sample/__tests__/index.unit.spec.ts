import { getGames, playGame } from "../assembly";
import { Game, games } from "../assembly/model";

const contract = "guessing game";
const NUMBER_GUESSED: u16 = 6;

describe("Contacts", () => {
  afterEach(() => {
    for (let index = 0; index < games.length; index++) {
      games.pop();
    }
  });

  it("Creates a new game with the playGame() call", () => {
    playGame(NUMBER_GUESSED);
    expect(games[0].guess).toStrictEqual(NUMBER_GUESSED, "the game was played using the number guessed");
  });

  it("Returns the games played on getGames() call", () => {
    playGame(NUMBER_GUESSED);
    const lastTenGames = getGames();
    expect(lastTenGames.length > 0).toBeTruthy("Games played is returned");
  });
});
