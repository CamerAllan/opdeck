import * as React from "react";

import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import { IStore } from "src/store/store";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore } from "src/store/store";
import { getAllData } from "src/actions/actions";
import DataView from "../presentation/DataView"

interface IDataDispatchProps {
    getAllDataDispatch: () => void;
}

interface IDataStateProps {
    data: any;
    selectedData: any;
}

type IDataProps = IDataDispatchProps & IDataStateProps;

class Data extends React.Component<IDataProps> {
    constructor(props: IDataProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getAllDataDispatch()
    }

    public render() {

        // Process data
        const data = this.props.data;
        const cardStats = {}

        if (data) {
            for (const user of data) {
                for (const gameKey in user.games) {
                    if (user.games.hasOwnProperty(gameKey)) {
                        const game = user.games[gameKey];
                        for (const turnKey in game.turns) {
                            if (game.turns.hasOwnProperty(turnKey)) {
                                const turn = game.turns[turnKey];
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

        const filteredStats = [];

        for (const key in cardStats) {
            if (cardStats.hasOwnProperty(key)) {
                const card = cardStats[key];
                filteredStats.push({ id: key, ...card })
            }
        }

        return (
            <DataView data={this.props.data} selectedData={this.props.selectedData} cardStats={filteredStats} />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    getAllDataDispatch: () => dispatch(getAllData())
});

const mapStateToProps = (state: IStore): IDataStateProps => {
    return { ...state };
};

export default connect<IDataStateProps, IDataDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Data);
