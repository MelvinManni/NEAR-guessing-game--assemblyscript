import { Game, games } from "../assembly";

const contract = "guessing game";
const NUMBER_GUESSED: u16 = 6;

describe("Contacts", () => {
  afterEach(() => {
    for (let index = 0; index < games.length; index++) {
      games.pop();
    }
  });

  it("Creates a new game with the playGame() call", () => {
    const gamePlayed = new Game().playGame(NUMBER_GUESSED);
    expect(gamePlayed.guess).toStrictEqual(NUMBER_GUESSED, "the game was played using the number guessed");
  });

  it("Returns the games played on getGames() call", () => {
    const lastTenGames = new Game().playGame(NUMBER_GUESSED).getGames();
    expect(lastTenGames.length > 0).toBeTruthy("Games played is returned");
  });
});
