import * as React from "react";

import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore } from "src/store/store";
import {
  getAllData,
  getGameData,
  selectGame,
  getAllGames
} from "src/actions/actions";
import DataView from "../../presentation/data/DataView";

interface IDataDispatchProps {
  getAllDataDispatch: () => void;
  getGameDataDispatch: (game: string) => void;
  selectGameDispatch: (gameId: string) => void;
  getAllGamesDispatch: () => void;
}

type IDataProps = IDataDispatchProps & IStore;

class Data extends React.Component<IDataProps> {
  constructor(props: IDataProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.getAllGamesDispatch();
    setInterval(() => {
      console.log(this.props.selectedData.game);
      this.props.getAllDataDispatch();
      this.props.getGameDataDispatch(
        this.props.selectedData.game
          ? this.props.selectedData.game
          : "alienTest"
      );
    }, this.props.updateRate);
  }

  public render() {
    if (!(this.props.cards && this.props.pillars && this.props.turns)) {
      return <div>loading...</div>;
    }

    // Process data
    const turns = this.props.turns;
    const cardStats = {};
    const userStats = {};
    const pillarStats = {};
    let validTurnCount = 0;

    if (turns) {
      for (const turn of turns) {
        if (!userStats[turn.userId]) {
          userStats[turn.userId] = { gamesPlayed: 0 };
        }

        let include: boolean = true;
        Object.keys(this.props.selectedData.pillars).forEach(pillar => {
          if (
            this.props.selectedData.pillars[pillar].moreThan &&
            this.props.selectedData.pillars[pillar].moreThan! <=
              turn.pillars[pillar].value
          ) {
            include = false;
          }

          if (
            this.props.selectedData.pillars[pillar].lessThan &&
            this.props.selectedData.pillars[pillar].lessThan! >=
              turn.pillars[pillar].value
          ) {
            include = false;
          }
        });

        if (include) {
          validTurnCount++;

          Object.keys(turn.pillars).forEach(pillarName => {
            if (pillarStats[pillarName] === 0 || pillarStats[pillarName]) {
              pillarStats[pillarName] =
                pillarStats[pillarName] + turn.pillars[pillarName].value;
            } else {
              pillarStats[pillarName] = 0;
            }
          });

          const card = turn.cardId;

          if (!cardStats[card]) {
            cardStats[card] = {
              id: card,
              accept: 0,
              reject: 0,
              total: 0,
              balance: 0
            };
          }

          if (turn.answer) {
            cardStats[card].accept += 1;
          } else {
            cardStats[card].reject += 1;
          }

          cardStats[card].total += 1;
          cardStats[card].balance =
            (cardStats[card].accept - cardStats[card].reject) /
            cardStats[card].total;
        }
      }
    }

    const processedPillarStats = [];

    for (const key in pillarStats) {
      if (pillarStats.hasOwnProperty(key)) {
        processedPillarStats.push({
          id: key,
          value: pillarStats[key] / validTurnCount
        });
      }
    }

    const processedData = { cardStats, pillarStats: processedPillarStats };

    return (
      <DataView
        selectGameDispatch={this.props.selectGameDispatch}
        games={this.props.games}
        processedData={processedData}
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
  selectGameDispatch: (id: string) => {
    dispatch(selectGame(id));
    dispatch(getGameData(id));
  },
  getGameDataDispatch: (game: string) => dispatch(getGameData(game)),
  getAllGamesDispatch: () => dispatch(getAllGames())
});

const mapStateToProps = (state: IStore): IStore => {
  return { ...state };
};

export default connect<IStore, IDataDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Data);
