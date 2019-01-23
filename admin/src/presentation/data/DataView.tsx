import * as React from "react";
import Select from "../../containers/common/Select";
import DataVis from "../../containers/data/DataVis";
import * as css from "../../styles/adminStyles";
import * as dataCSS from "../../styles/data/dataVisStyles";
import { ISelectedData, ICards, IPillars } from "src/store/store";

interface IDataStateProps {
    selectedData: ISelectedData;
    cards: ICards;
    pillars: IPillars;
    processedData: { cardStats: any, pillarStats: any }
}

class DataView extends React.Component<IDataStateProps> {
    public render() {
        return (
            <div style={css.adminTopLevel}>
                <div style={css.adminSelectCont}>
                    <Select selectedCards={this.props.selectedData.cards} pillars={this.props.pillars} cards={this.props.cards} />
                </div>
                <div style={dataCSS.visContainer}>
                    <DataVis {...this.props.processedData} selectedData={this.props.selectedData} />
                </div>
            </div>);
    }
}

export default DataView;
