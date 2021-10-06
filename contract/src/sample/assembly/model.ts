import { context, PersistentVector } from "near-sdk-as";

NativeMath.seedRandom(reinterpret<u64>(JSMath.random()));

@nearBindgen
export class Game {
  participant: string;
  correctNumber: u16;
  won: boolean;

  constructor(public guess: u16) {
    this.participant = context.sender;
    this.correctNumber = <u16>(NativeMath.random() * 10);
    this.won = this.correctNumber == guess;
  }
}

export const games = new PersistentVector<Game>("g");
