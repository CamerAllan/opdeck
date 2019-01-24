import * as React from "react";
import * as css from "../../styles/data/dataVisStyles";
const V = require("react-vis");

interface IDataVisHorBarStateProps {
  data: Array<{}>;
  xName: string;
  yName: string;
  title: string;
  description: string;
}

class DataVisHorBarView extends React.Component<IDataVisHorBarStateProps> {
  public render() {
    const getX = (d: any) => d[this.props.xName];
    const getY = (d: any) => d[this.props.yName];

    return (
      <div style={css.vis}>
        <div style={css.title}>{this.props.title}</div>
        <div style={css.desc}>{this.props.description}</div>
        <div>
          {
            <V.FlexibleWidthXYPlot
              animation={true}
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
              <V.HorizontalBarSeries data={this.props.data} style={{}} />
            </V.FlexibleWidthXYPlot>
          }
        </div>
      </div>
    );
  }
}

export default DataVisHorBarView;
