import { Reducer } from "redux";
import * as types from "../actions/actionTypes";

import defaultStore from "../store/defaultStore";
import {
  ICards,
  IEffects,
  IGame,
  IGameData,
  IInterfaceData,
  IPillars,
  IStore,
  IUserData
} from "../store/store";

/**
non pure function will break redux time travel debug
between games but we'll say that's ok
*/
function shuffle(a: any[]) {
  let j;
  let x;
  let i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function isPlayable(cardId: string, pillars: IPillars, cards: ICards) {
  const card = cards[cardId];

  let valid: boolean = true;
  for (const pillar in card.weightings) {
    if (pillars.hasOwnProperty(pillar)) {
      const element = pillars[pillar];
      const lessThan = card.weightings[pillar].lessThan as number;
      if (lessThan && lessThan < element.value) {
        valid = false;
      }
      const moreThan = card.weightings[pillar].moreThan as number;
      if (moreThan && moreThan > element.value) {
        valid = false;
      }
    }
  }
  return valid;
}

function addCards(cards: string[], cardsToAdd: string[]): string[] {
  return [...new Set([...cards, ...cardsToAdd])];
}

function removeCards(cards: string[], cardsToRemove: string[]): string[] {
  return cards.filter(card => {
    let isIn: boolean = true;
    for (const toRemove of cardsToRemove) {
      if (card === toRemove) {
        isIn = false;
      }
    }
    return isIn;
  });
}

function changePillar(newPillars: IPillars, pillar: string, effects: IEffects) {
  const increment = Math.round(effects[pillar]);
  const newPillar = newPillars[pillar];
  const newValue = newPillar.value + increment;
  if (newValue <= newPillar.max && newValue >= newPillar.min) {
    newPillars[pillar].value += increment;
  }
  return newPillars;
}

function mainReducer(state = defaultStore, action: any): IStore {
  const interfaceData = state.interfaceData as IInterfaceData;
  const gameData = state.gameData as IGameData;
  const userData = state.userData as IUserData;
  const game = (state.gameData ? state.gameData.game : null) as IGame;

  switch (action.type) {
    // USER
    case types.ADD_USER: {
      return {
        ...state,
        userData: { ...userData, userId: action.payload.userId }
      };
    }

    // GAME
    case types.DRAW_CARD:
      return {
        ...state,
        gameData: {
          ...gameData,
          game: { ...game },
          currentCard: game.playDeck[0]
        }
      };
    case types.CHOOSE:
      const newPillars: IPillars = { ...game.pillars };
      const responses = game.cards[gameData.currentCard].contents.responses;
      let newReserve: string[] = [...game.reserveDeck];
      const newPlay: string[] = [];
      if (action.choice) {
        for (const pillar in responses.accept.effects) {
          if (game.pillars.hasOwnProperty(pillar)) {
            changePillar(newPillars, pillar, responses.accept.effects);
          }
        }
        newReserve = addCards(
          removeCards(newReserve, responses.accept.cardsRemoved),
          responses.accept.cardsAdded
        );
      } else {
        for (const pillar in responses.reject.effects) {
          if (game.pillars.hasOwnProperty(pillar)) {
            changePillar(newPillars, pillar, responses.reject.effects);
          }
        }
        newReserve = addCards(
          removeCards(newReserve, responses.reject.cardsRemoved),
          responses.reject.cardsAdded
        );
      }

      for (const potentialCard of newReserve) {
        if (isPlayable(potentialCard, newPillars, game.cards)) {
          newPlay.push(potentialCard);
        }
      }

      shuffle(newPlay);

      let over: boolean = gameData.over; 
      Object.keys(newPillars).forEach(pillar => {
        if (newPillars[pillar].value === newPillars[pillar].min) {
          over = true;
        }
      });

      if (newPlay.length === 0) {
        over = true;
      }

      return {
        ...state,
        gameData: {
          ...gameData,
          over,
          turnNum: gameData.turnNum + 1,
          game: {
            ...game,
            pillars: newPillars,
            reserveDeck: newReserve,
            playDeck: newPlay
          }
        }
      };

    // INTERFACE
    case types.UPDATE_DECISION_HOVER: {
      return {
        ...state,
        interfaceData: { ...interfaceData, hoverLoc: action.value }
      };
    }

    // OTHER
    case types.START_GAME_SUCCESS: {
      return {
        ...state,
        gameData: {
          over: false,
          currentCard: action.payload.game.playDeck[0],
          game: { ...action.payload.game },
          turnNum: 0,
          gameId: action.payload.gameId,
          settings: {}
        },
        interfaceData: {
          ...interfaceData,
          gameInProgress: true
        }
      };
    }
    default: {
      return { ...state };
    }
  }
}

const app: Reducer<IStore> = mainReducer;
export default app;
