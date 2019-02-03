import * as React from "react";

import DataVisView from "src/presentation/data/DataVisView";
import { ISelectedData } from "src/store/store";

interface IDataVisStateProps {
    cardStats: any
    pillarStats: any
    selectedData: ISelectedData;
}

type IDataVisProps = IDataVisStateProps;

class DataVis extends React.Component<IDataVisProps> {
    constructor(props: IDataVisProps) {
        super(props);
    }

    public render() {

        const filteredCardStats: any[] = [];
        Object.keys(this.props.cardStats).forEach(card => {
            if (this.props.selectedData.cards.indexOf(card) !== -1) {
                filteredCardStats.push(this.props.cardStats[card]);
            }
        });

        return (
            <DataVisView cardStats={filteredCardStats} pillarStats={this.props.pillarStats} />
        );
    }
}

export default DataVis