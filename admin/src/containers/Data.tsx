import * as React from "react";

import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import { IStore } from "src/store/store";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore, IGame } from "src/store/store";
import { getAllData, getGameData } from "src/actions/actions";
import DataView from "../presentation/DataView"

interface IDataDispatchProps {
    getAllDataDispatch: () => void;
    getGameDataDispatch: (game: string) => void;
}

interface IDataStateProps {
    data: any;
    selectedData: any;
    game?: IGame;
    updateRate: number
}

type IDataProps = IDataDispatchProps & IDataStateProps;

class Data extends React.Component<IDataProps> {
    constructor(props: IDataProps) {
        super(props);
    }

    public componentDidMount() {
        setInterval(() => {
            this.props.getAllDataDispatch();
            this.props.getGameDataDispatch("alienTest");
        }, this.props.updateRate)
    }

    public render() {

        // Process data
        const data = this.props.data;
        const cardStats = {}
        const userStats = {}
        const pillarStats = {}
        let validTurnCount = 0;

        if (data) {
            for (const user of data) {
                if (!userStats[user]) {
                    userStats[user] = { gamesPlayed: 0, }
                }
                for (const gameKey in user.games) {
                    if (user.games.hasOwnProperty(gameKey)) {
                        const game = user.games[gameKey];
                        for (const turnKey in game.turns) {
                            if (game.turns.hasOwnProperty(turnKey)) {
                                const turn = game.turns[turnKey];

                                let include: boolean = true;
                                Object.keys(this.props.selectedData.filter).forEach((pillar) => {

                                    if (this.props.selectedData.filter[pillar].moreThan &&
                                        this.props.selectedData.filter[pillar].moreThan <= turn.pillars[pillar].value) {
                                        include = false;
                                    }

                                    if (this.props.selectedData.filter[pillar].lessThan &&
                                        this.props.selectedData.filter[pillar].lessThan >= turn.pillars[pillar].value) {
                                        include = false;
                                    }
                                })

                                if (include) {

                                    validTurnCount++;

                                    Object.keys(turn.pillars).forEach((pillarName) => {
                                        if (pillarStats[pillarName] === 0 || pillarStats[pillarName]) {
                                            pillarStats[pillarName] = pillarStats[pillarName] + turn.pillars[pillarName].value;
                                        }
                                        else {
                                            pillarStats[pillarName] = 0
                                        }
                                    })

                                    const card = turn.cardId;

                                    if (!cardStats[card]) {
                                        cardStats[card] = { accept: 0, reject: 0, total: 0, balance: 0 }
                                    }

                                    if (turn.answer) {
                                        cardStats[card].accept += 1;

                                    } else {
                                        cardStats[card].reject += 1;
                                    }

                                    cardStats[card].total += 1;
                                    cardStats[card].balance = (cardStats[card].accept - cardStats[card].reject) / cardStats[card].total;
                                }
                            }
                        }
                    }
                }
            }
        }

        const filteredCardStats = [];
        const selectedCardStats = [];
        const processedPillarStats = [];

        for (const key in pillarStats) {
            if (pillarStats.hasOwnProperty(key)) {
                processedPillarStats.push({ id: key, value: pillarStats[key] / validTurnCount })
            }
        }

        for (const key in cardStats) {
            if (cardStats.hasOwnProperty(key)) {
                const card = cardStats[key];
                filteredCardStats.push({ id: key, ...card })
                if (this.props.selectedData.cards.indexOf(key) > -1) {
                    selectedCardStats.push({ id: key, ...card });
                }
            }
        }
        return (
            <DataView game={this.props.game} data={this.props.data} selectedData={this.props.selectedData} cardStats={filteredCardStats} pillarStats={processedPillarStats} selectedCardStats={selectedCardStats} />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    getAllDataDispatch: () => dispatch(getAllData()),
    getGameDataDispatch: (game: string) => dispatch(getGameData(game))
});

const mapStateToProps = (state: IStore): IDataStateProps => {
    return { ...state };
};

export default connect<IDataStateProps, IDataDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Data);
