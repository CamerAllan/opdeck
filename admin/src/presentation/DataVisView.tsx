import * as React from "react";
import * as css from "src/styles/dataVisStyles";
const V = require("react-vis");

interface IDataVisStateProps {
  data: any;
}

class DataVisView extends React.Component<IDataVisStateProps> {
  public render() {
    return (
      <div style={css.visContainer}>
        <div style={css.vis}>
          {balanceChart(this.props.data, "balance", "id")}
        </div>
        <div style={css.vis}>{totalChart(this.props.data, "id", "total")}</div>
      </div>
    );
  }
}

function balanceChart(data: any, xName: string, yName: string) {
  const getX = (d: any) => d[xName];
  const getY = (d: any) => d[yName];

  return (
    <V.FlexibleWidthXYPlot
      margin={{ left: 120, right: 50, top: 50, bottom: 50 }}
      yType={"ordinal"}
      getX={getX}
      getY={getY}
      height={500}
    >
      <V.VerticalGridLines />
      <V.HorizontalGridLines />
      <V.XAxis orientation="bottom" />
      <V.YAxis orientation="left" />
      <V.HorizontalBarSeries data={data} style={{}} />
    </V.FlexibleWidthXYPlot>
  );
}

function totalChart(data: any, xName: string, yName: string) {
  const getX = (d: any) => d[xName];
  const getY = (d: any) => d[yName];

  return (
    <V.FlexibleWidthXYPlot
      margin={{ left: 50, right: 50, top: 50, bottom: 120 }}
      xType={"ordinal"}
      getX={getX}
      getY={getY}
      height={500}
    >
      <V.VerticalGridLines />
      <V.HorizontalGridLines />
      <V.XAxis orientation="bottom" tickLabelAngle={-90} />
      <V.YAxis orientation="left" />
      <V.VerticalBarSeries data={data} style={{}} />
    </V.FlexibleWidthXYPlot>
  );
}

export default DataVisView;
