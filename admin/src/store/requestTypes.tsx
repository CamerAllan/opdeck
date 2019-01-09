export interface ITurnRequest {
  userId: string;
  gameId: string;
  cardId: string;
  answer: boolean;
  turnNum: number;
}
