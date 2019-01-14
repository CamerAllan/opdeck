import * as React from "react";
import DataSelect from "../containers/DataSelect";
import DataVis from "../containers/DataVis";
import * as css from "../styles/dataStyles";

interface IDataStateProps {
    data: any;
    selectedData: any
    cardStats: any
    selectedCardStats: any
}

class DataView extends React.Component<IDataStateProps> {
    public render() {
        return (
            <div style={css.dataTopLevel}>
                <div style={css.dataSelectCont}>
                    <DataSelect {...this.props} />
                </div>
                <div style={css.dataVisCont}>
                    <DataVis cardStats={this.props.selectedCardStats} />
                </div>
            </div>);
    }
}

export default DataView;
