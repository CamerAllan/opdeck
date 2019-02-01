import { Reducer } from "redux";
import * as types from "../actions/actionTypes";
import { ICard } from "../store/store";
import defaultStore from "../store/defaultStore";
import { IStore, IGame, Menu } from "../store/store";
import { ITurnRequest } from "../store/requestTypes";

function mainReducer(state = defaultStore, action: any): IStore {
  switch (action.type) {
    case types.NEW_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
        selectedData: {
          ...state.selectedData,
          game: action.payload
        }
      };
    case types.SELECT_STARTING_DECK: {
      return {
        ...state,
        startingDeck: action.payload
      };
    }
    case types.SELECT_GAME:
      return {
        ...state,
        selectedData: { ...state.selectedData, game: action.payload }
      };
    case types.SELECT_CARD: {
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          card: action.payload
        },
        menu: Menu.ADD_CARD
      };
    }
    case types.GET_ALL_GAMES_SUCCESS: {
      return { ...state, games: action.payload };
    }
    case types.SELECT_PILLAR: {
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          pillar: action.payload
        },
        menu: Menu.ADD_PILLAR
      };
    }
    case types.DELETE_PILLAR: {
      const { [action.payload]: removed, ...newPillars } = state.pillars;
      const oldCards = state.cards;
      const newCards = {};
      // Remove references to this pillar
      Object.keys(oldCards).forEach(oc => {
        const card: ICard = oldCards[oc];
        delete card.contents.responses.accept.effects[action.payload];
        delete card.contents.responses.reject.effects[action.payload];
        delete card.weightings[action.payload];
        newCards[oc] = card;
      });
      return {
        ...state,
        pillars: newPillars,
        menu: Menu.VIS,
        cards: newCards
      };
    }
    case types.DELETE_CARD: {
      const { [action.payload]: removed, ...newCards } = state.cards;
      // Remove references to this card
      Object.keys(newCards).forEach(c => {
        const card: ICard = newCards[c];
        while (
          card.contents.responses.accept.cardsAdded.indexOf(action.payload) !==
          -1
        ) {
          card.contents.responses.accept.cardsAdded.splice(
            card.contents.responses.accept.cardsAdded.indexOf(action.payload),
            1
          );
        }
        while (
          card.contents.responses.reject.cardsAdded.indexOf(action.payload) !==
          -1
        ) {
          card.contents.responses.reject.cardsAdded.splice(
            card.contents.responses.reject.cardsAdded.indexOf(action.payload),
            1
          );
        }
        while (
          card.contents.responses.accept.cardsRemoved.indexOf(
            action.payload
          ) !== -1
        ) {
          card.contents.responses.accept.cardsRemoved.splice(
            card.contents.responses.accept.cardsRemoved.indexOf(action.payload),
            1
          );
        }
        while (
          card.contents.responses.reject.cardsRemoved.indexOf(
            action.payload
          ) !== -1
        ) {
          card.contents.responses.reject.cardsRemoved.splice(
            card.contents.responses.reject.cardsRemoved.indexOf(action.payload),
            1
          );
        }
      });
      return {
        ...state,
        cards: newCards,
        menu: Menu.VIS
      };
    }

    case types.OPEN_ADD_CARD_MENU: {
      return {
        ...state,
        menu: Menu.ADD_CARD,
        selectedData: {
          ...state.selectedData,
          card: null
        }
      };
    }
    case types.OPEN_ADD_PILLAR_MENU: {
      return {
        ...state,
        menu: Menu.ADD_PILLAR,
        selectedData: {
          ...state.selectedData,
          pillar: null
        }
      };
    }
    case types.ADD_CARD: {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: action.payload.card
        }
      };
    }
    case types.ADD_PILLAR: {
      return {
        ...state,
        pillars: {
          ...state.pillars,
          [action.payload.id]: action.payload.pillar
        }
      };
    }
    case types.CLOSE_MENU: {
      return {
        ...state,
        menu: Menu.VIS
      };
    }

    case types.GET_ALL_DATA_SUCCESS: {
      const turns: ITurnRequest[] = [];

      action.payload.data.forEach((user: any) => {
        Object.keys(user.games).forEach(game => {
          if (user.games.hasOwnProperty(game)) {
            Object.keys(user.games[game].turns).forEach(turn => {
              if (user.games[game].turns.hasOwnProperty(turn)) {
                turns.push(user.games[game].turns[turn]);
              }
            });
          }
        });
      });

      return {
        ...state,
        turns
      };
    }
    case types.GET_GAME_DATA_SUCCESS: {
      const game = action.payload.game as IGame;
      return {
        ...state,
        cards: game.cards,
        pillars: game.pillars
      };
    }
    case types.GET_GAME_DATA_FAILED: {
      return {
        ...state,
        cards: {},
        pillars: {}
      };
    }
    case types.SELECT_CARDS: {
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          cards: action.payload.cardIds
        }
      };
    }
    case types.FILTER_PILLARS: {
      const pillarName = Object.keys(action.payload.filter)[0];
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          pillars: {
            ...state.selectedData.pillars,
            [pillarName]: {
              ...state.selectedData.pillars[pillarName],
              ...action.payload.filter[pillarName]
            }
          }
        }
      };
    }
    default:
      return { ...state };
  }
}

const app: Reducer<IStore> = mainReducer;
export default app;
