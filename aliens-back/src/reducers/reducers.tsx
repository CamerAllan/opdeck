import { combineReducers, Reducer } from "redux";
import * as types from "../actions/actionTypes";

import defaultStore from "../store/defaultStore";
import {
  ICards,
  IEffects,
  IGameData,
  IPillars,
  IStore,
  IUserData
} from "../store/store";

function userData(state = defaultStore.userData, action: any): IUserData {
  switch (action.type) {
    case types.UPDATE_USER_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
}
function gameData(state = defaultStore.gameData, action: any): IGameData {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state
      };
    case types.DRAW_CARD:
      return {
        ...state,
        currentCard: state.playDeck[0]
      };
    case types.CHOOSE:
      const newPillars: IPillars = { ...state.pillars };
      const responses = state.cards[state.currentCard].contents.responses;
      let newReserve: string[] = [...state.reserveDeck];
      const newPlay: string[] = [];
      if (action.choice) {
        for (const pillar in responses.accept.effects) {
          if (state.pillars.hasOwnProperty(pillar)) {
            changePillar(newPillars, pillar, responses.accept.effects);
          }
        }
        newReserve = addCards(
          removeCards(newReserve, responses.accept.cardsRemoved),
          responses.accept.cardsAdded
        );
      } else {
        for (const pillar in responses.reject.effects) {
          if (state.pillars.hasOwnProperty(pillar)) {
            changePillar(newPillars, pillar, responses.reject.effects);
          }
        }
        newReserve = addCards(
          removeCards(newReserve, responses.reject.cardsRemoved),
          responses.reject.cardsAdded
        );
      }

      for (const potentialCard of newReserve) {
        if (isPlayable(potentialCard, newPillars, state.cards)) {
          newPlay.push(potentialCard);
        }
      }

      shuffle(newPlay);

      return {
        ...state,
        pillars: newPillars,
        reserveDeck: newReserve,
        playDeck: newPlay
      };

    default:
      return state;
  }
}

function interfaceData(state = defaultStore.interfaceData, action: any) {
  switch (action.type) {
    case types.UPDATE_DECISION_HOVER: {
      return { ...state, hoverLoc: action.value };
    }
    default:
      return state;
  }
}

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

const app: Reducer<IStore> = combineReducers({
  userData,
  gameData,
  interfaceData
});
export default app;
