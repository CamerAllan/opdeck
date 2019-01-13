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
    data: any;
    cardStats: any
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

        return (
            <DataVisView data={this.props.cardStats} />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    getAllDataDispatch: () => dispatch(getAllData())
});

const mapStateToProps = (state: IStore, ownProps: IDataVisStateProps): IDataVisStateProps => {
    return { data: state.data, cardStats: ownProps.cardStats };
};

export default connect<IDataVisStateProps, IDataVisDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(DataVis);
