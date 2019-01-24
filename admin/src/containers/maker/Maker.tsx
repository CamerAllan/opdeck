import * as React from "react";
import MakerView from "../../presentation/maker/MakerView";
import { IStore, IGame } from "src/store/store";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAllData, getGameData, saveGame } from "src/actions/actions";

interface IMakerDispatchProps {
  getAllDataDispatch: () => void;
  getGameDataDispatch: (game: string) => void;
  saveGameDispatch: (id: string, game: IGame) => void;
}

type IMakerProps = IMakerDispatchProps & IStore;

class Maker extends React.Component<IMakerProps> {
  constructor(props: IMakerProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.getAllDataDispatch();
    this.props.getGameDataDispatch("alienTest");
    setInterval(
      () =>
        this.props.saveGameDispatch("alienTest", {
          id: "alienTest",
          currentCard: "goodMorning",
          pillars: this.props.pillars,
          playDeck: [],
          reserveDeck: Object.keys(this.props.cards),
          cards: this.props.cards
        }),
      10000
    );
  }

  public render() {
    return (
      <MakerView
        menu={this.props.menu}
        selectedData={this.props.selectedData}
        cards={this.props.cards}
        pillars={this.props.pillars}
      />
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  getAllDataDispatch: () => dispatch(getAllData()),
  getGameDataDispatch: (game: string) => dispatch(getGameData(game)),
  saveGameDispatch: (id: string, game: IGame) => dispatch(saveGame(id, game))
});

const mapStateToProps = (state: IStore): IStore => {
  return { ...state };
};

export default connect<IStore, IMakerDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Maker);
