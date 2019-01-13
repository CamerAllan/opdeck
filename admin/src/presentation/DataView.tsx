import * as React from "react";
import DataSelect from "../containers/DataSelect";
import DataVis from "../containers/DataVis";
import * as css from "../styles/dataStyles";

interface IDataStateProps {
    data: any;
    selectedData: any
    cardStats: any
}

class DataView extends React.Component<IDataStateProps> {
    public render() {
        return (
            <div style={css.dataTopLevel}>
                <div style={css.dataSelectCont}>
                    <DataSelect {...this.props} />
                </div>
                <div style={css.dataVisCont}>
                    <DataVis {...this.props} />
                </div>
            </div>);
    }
}

export default DataView;
