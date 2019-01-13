import * as React from "react";
import DataSelectView from "../presentation/DataSelectView"

interface IDataVisStateProps {
    data: any
    selectedData: any
    cardStats: any
}

type IDataVisProps = IDataVisStateProps;

class DataVis extends React.Component<IDataVisProps> {
    constructor(props: IDataVisProps) {
        super(props);
    }

    public render() {

        return (
            <DataSelectView {...this.props} />
        );
    }
}

export default DataVis;