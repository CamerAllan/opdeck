import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { drawCard } from "../actions/actions";
import GameView from "../presentation/GameView";
import { HoverLoc, IGameData, IStore } from "../store/store";

interface IGameDispatchProps {
  drawCardDispatch: () => void;
}

interface IGameStateProps {
  gameData: IGameData;
  hoverLoc: HoverLoc;
}

type IGameProps = IGameDispatchProps & IGameStateProps;

class Game extends React.Component<IGameProps> {
  constructor(props: IGameProps) {
    super(props);
  }

  public render() {
    return (
      <GameView
        gameData={this.props.gameData}
        drawCard={this.props.drawCardDispatch}
        hoverLoc={this.props.hoverLoc}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  drawCardDispatch: () => dispatch(drawCard())
});

const mapStateToProps = (state: IStore): IGameStateProps => {
  return {
    gameData: state.gameData,
    hoverLoc: state.interfaceData.hoverLoc
  };
};

export default connect<IGameStateProps, IGameDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Game);
