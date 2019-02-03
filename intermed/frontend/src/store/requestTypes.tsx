import { IPillars } from "./store";

export interface ITurnRequest {
  userId: string;
  gameId: string;
  cardId: string;
  answer: boolean;
  turnNum: number;
  pillars: IPillars;
}
