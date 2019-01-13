import * as React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
// import * as css from "src/styles/TopLevelStyles";

interface IDataVisStateProps {
    data: any;
}

class DataVisView extends React.Component<IDataVisStateProps> {
    public render() {
        return (<div style={{ fontSize: "3px" }}>
            {balanceChart(this.props.data, "id", "balance")}
            {totalChart(this.props.data, "id", "total")}
        </div>);
    }
}

function balanceChart(data: any, xName: string, yName: string) {
    return (
        <VictoryChart domain={{ x: [-1, 1] }} >
            <VictoryBar
                horizontal={true}
                data={data}
                x={xName}
                y={yName} />
        </VictoryChart >)
}

function totalChart(data: any, xName: string, yName: string) {
    return (
        <VictoryChart>
            <VictoryAxis
                style={{
                    offsetY: 200,
                    tickLabels: { fontSize: 10, angle: -90 }
                }}
            />
            <VictoryBar
                data={data}
                x={xName}
                y={yName} />
        </VictoryChart >)
}


// function barAxis(horizontal: boolean) {
//     return (<VictoryAxis
//         style={{
//             axis: { stroke: '#E0F2F1' },
//             axisLabel: { fontSize: 16 },
//             ticks: { stroke: '#ccc' },
//             offsetY: 200,
//             tickLabels: { fontSize: 10, fill: '#E0F2F1', angle: -90 }
//         }}
//     />)
// }
export default DataVisView;
