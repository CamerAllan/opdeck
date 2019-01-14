import * as React from "react";
import DataSelectView from "../presentation/DataSelectView"
import { ThunkDispatch } from "redux-thunk";
import { IStore } from "src/store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { selectCard, deselectCard } from "src/actions/actions";

interface IDataSelectStateProps {
    data: any
    selectedData: any
    cardStats: any
}

interface IDataSelectDispatchProps {
    selectItemDispatch: (id: string, action: (id: string) => AnyAction) => void
    deselectItemDispatch: (id: string, action: (id: string) => AnyAction) => void
}

type IDataSelectProps = IDataSelectStateProps & IDataSelectDispatchProps;

class DataSelect extends React.Component<IDataSelectProps> {
    constructor(props: IDataSelectProps) {
        super(props);
    }

    public render() {

        return (
            <DataSelectView {...this.props} selectActions={{ card: { select: this.selectCard, deselect: this.deselectCard } }} />
        );
    }

    private selectCard = (id: string) => {
        this.props.selectItemDispatch(id, selectCard);
    }

    private deselectCard = (id: string) => {
        this.props.deselectItemDispatch(id, deselectCard);
    }

}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    selectItemDispatch: (id: string, action: (id: string) => AnyAction) => dispatch(action(id)),
    deselectItemDispatch: (id: string, action: (id: string) => AnyAction) => dispatch(action(id))
});

export default connect<IDataSelectStateProps, IDataSelectDispatchProps>(
    null,
    mapDispatchToProps
)(DataSelect);
