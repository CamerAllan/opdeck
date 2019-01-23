import * as React from "react";

import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import { IStore } from "src/store/store";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore, ICards, IPillars, ISelectedData } from "../../store/store";
import { getAllData } from "../../actions/actions";
import MakerVisView from "../../presentation/maker/MakerVisView";

interface IMakerVisDispatchProps {
    getAllDataDispatch: () => void;
}

interface IMakerVisStateProps {
    cards: ICards;
    pillars: IPillars;
    selectedData: ISelectedData;
}

type IMakerVisProps = IMakerVisDispatchProps & IMakerVisStateProps;

class MakerVis extends React.Component<IMakerVisProps> {
    constructor(props: IMakerVisProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getAllDataDispatch()
    }

    public render() {

        return (
            <MakerVisView {...this.props} />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
    getAllDataDispatch: () => dispatch(getAllData())
});

export default connect<IMakerVisStateProps, IMakerVisDispatchProps>(
    null,
    mapDispatchToProps
)(MakerVis);
