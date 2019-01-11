import * as React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
// import * as css from "src/styles/TopLevelStyles";

interface IDataVisStateProps {
    data: any;
}

class DataVisView extends React.Component<IDataVisStateProps> {
    public render() {
        console.log(this.props.data);
        return (<VictoryChart>
            <VictoryAxis
                style={{
                    axis: { stroke: '#E0F2F1' },
                    axisLabel: { fontSize: 16 },
                    ticks: { stroke: '#ccc' },
                    offsetY: 200,
                    tickLabels: { fontSize: 10, fill: '#E0F2F1', angle: -90 }
                }}
            /><VictoryBar data={this.props.data}
                x="id"
                y="balance" /></VictoryChart >);
    }
}

export default DataVisView;
