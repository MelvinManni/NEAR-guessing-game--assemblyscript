![Near, Inc. logo](https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311)

## Design

### Interface

```ts
export function getContacts(accountId: string): Contact[] | null 
```
- "View" function (ie. a function that does NOT alter contract state)
- Takes account id as a parameters
- Returns all the contact linked to the account or null if there is no contact

```ts
playGame(guess: u16): Game
```

- "Change" function (ie. a function that alters contract state)
- Takes one parameters, a number and creates a new game object with the number. It returns the game played.
