export interface IStore {
  userData: IUserData;
  gameData: IGameData;
}

export interface IGameData {
  pillars: IPillars;
  playDeck: string[];
  reserveDeck: string[];
  cards: ICards;
  currentCard: string;
  settings: ISettings;
}

export interface ISettings {
  deckSize: number;
}

export interface ICard {
  weightings: IWeightings;
  contents: ICardContents;
}

export interface IWeightings {
  [pillar: string]: number;
}

export interface IPillars {
  [name: string]: IPillar;
}

export interface IPillar {
  value: number;
  min: number;
  max: number;
  description: string;
}

export interface ICardContents {
  name: string;
  text: string;
  image: string;
  responses: IResponses;
}

export interface IResponses {
  accept: IConsequence;
  reject: IConsequence;
}

export interface IConsequence {
  text: string;
  cardsAdded: string[];
  cardsRemoved: string[];
  effects: IEffects;
}

export interface IEffects {
  [pillar: string]: number;
}

export interface IUserData {
  age?: number;
  sex?: Gender;
}

export interface ICards {
  [id: string]: ICard;
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER
}
