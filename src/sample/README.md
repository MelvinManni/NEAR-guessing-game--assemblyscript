![Near, Inc. logo](https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311)

## Design

### Interface

```ts
  getGames(): Game[]
```
- "View" method (ie. a function that does NOT alter contract state)
- Returns an array of games, limited to 10 values to optimize gas fee.

```ts
playGame(guess: u16): Game
```
- "Change" method (ie. a function that alters contract state)
- Takes one parameters, a number and creates a new game object with the number. It returns the game played.
