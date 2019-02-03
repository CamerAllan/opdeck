import * as React from "react";
import { connect } from "react-redux";
import { IStore, IGame } from "../store/store";
import GameSelectorView from "../presentation/GameSelectorView";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  selectGame,
  getGameData,
  newGame,
  saveGame,
  selectStartingDeck
} from "src/actions/actions";
import GameInfo from "./GameInfo";

interface IGameSelectorDispatchProps {
  selectGameDispatch: (id: string) => void;
  newGameDispatch: (id: string) => void;
  saveGameDispatch: (id: string, game: IGame) => void;
  selectStartingDeckDispatch: (cards: string[]) => void;
}

interface IGameSelectorStateProps {
  gameId: string;
  game: IGame;
  games: string[];
}

type GameSelectorProps = IGameSelectorDispatchProps & IGameSelectorStateProps;

class GameSelector extends React.Component<GameSelectorProps> {
  public render() {
    const save = () =>
      this.props.saveGameDispatch(this.props.gameId, this.props.game);
    return (
      <div>
        <GameSelectorView {...this.props} saveGameDispatch={save} />
        <GameInfo game={this.props.game} />
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  selectGameDispatch: (id: string) => {
    dispatch(selectGame(id));
    dispatch(getGameData(id));
  },
  newGameDispatch: (id: string) => dispatch(newGame(id)),
  saveGameDispatch: (gameId: string, game: IGame) =>
    dispatch(saveGame(gameId, game)),
  selectStartingDeckDispatch: (cards: string[]) =>
    dispatch(selectStartingDeck(cards))
});

const mapStateToProps: (state: IStore) => IStore = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSelector);
