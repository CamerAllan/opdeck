import { ITurnRequest } from "./requestTypes";

export interface IStore {
  data: ITurnRequest[]
}

export interface IInterfaceData {
  hoverLoc: HoverLoc;
  gameInProgress: boolean;
}

export interface IGameData {
  gameId: string;
  turnNum: number;
  pillars: IPillars;
  playDeck: string[];
  reserveDeck: string[];
  cards: ICards;
  currentCard: string;
  settings: ISettings;
}

export interface IGame {
  pillars: IPillars;
  playDeck: string[];
  reserveDeck: string[];
  cards: ICards;
  currentCard: string;
}

export interface IPerson {
  name: string;
}

export interface ISettings {
  deckSize?: number;
}

export interface ICard {
  weightings: IWeightings;
  contents: ICardContents;
}

export interface IWeightings {
  [pillar: string]: IWeighting;
}

export interface IWeighting {
  lessThan?: number;
  moreThan?: number;
}

export interface IPillars {
  [name: string]: IPillar;
}

export interface IPillar {
  value: number;
  min: number;
  max: number;
  description?: string;
  colour: string;
}

export interface ICardContents {
  name: string;
  text: string;
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
  userId?: string;
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

export enum HoverLoc {
  ACCEPT,
  REJECT,
  ELSE
}
