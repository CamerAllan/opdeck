import * as React from "react";

import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import { IStore } from "src/store/store";
import DataVisView from "src/presentation/DataVisView";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore } from "src/store/store";
import { getAllData } from "src/actions/actions";

interface IDataVisDispatchProps {
    getAllDataDispatch: () => void;
}

interface IDataVisStateProps {
    data: any
}

type IDataVisProps = IDataVisDispatchProps & IDataVisStateProps;

class DataVis extends React.Component<IDataVisProps> {
    constructor(props: IDataVisProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getAllDataDispatch()
    }

    public render() {

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
                filteredStats.push({ id: key, balance: card.balance })
            }
        }

        return (
            <DataVisView data={filteredStats} />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    getAllDataDispatch: () => dispatch(getAllData())
});

const mapStateToProps = (state: IStore): IDataVisStateProps => {
    return { data: state.data };
};

export default connect<IDataVisStateProps, IDataVisDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(DataVis);
