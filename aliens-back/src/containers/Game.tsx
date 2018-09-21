import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { drawCard } from "../actions/actions";
import GameView from "../presentation/GameView";
import { ICards, IPillars, ISettings, IStore } from "../store/store";

interface IGameDispatchProps {
  drawCardDispatch: () => void;
}

interface IGameStateProps {
  pillars: IPillars;
  playDeck: string[];
  reserveDeck: string[];
  cards: ICards;
  currentCard: string;
  settings: ISettings;
}

type IGameProps = IGameDispatchProps & IGameStateProps;

class Game extends React.Component<IGameProps> {
  constructor(props: IGameProps) {
    super(props);
  }

  public render() {
    return (
      <GameView gameData={this.props} drawCard={this.props.drawCardDispatch} />
    );
  }

  // public getRandomCardID: () => string = () => {
  //   return randomElement(this.props.playDeck);
  // };
}

// const randomElement = (array: any[]) => {
//   const index = Math.floor(Math.random() * array.length);
//   return array[index];
// };

const mapDispatchToProps = (dispatch: Dispatch) => ({
  drawCardDispatch: () => dispatch(drawCard())
});

const mapStateToProps = (state: IStore) => {
  return {
    ...state.gameData
  };
};

export default connect<IGameStateProps, IGameDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Game);
