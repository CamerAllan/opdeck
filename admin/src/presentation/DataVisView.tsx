import * as React from "react";
import * as css from "src/styles/dataVisStyles";
import DataVisVertBarView from "./DataVisVertBarView"
import DataVisHorBarView from "./DataVisHorBarView"

interface IDataVisStateProps {
  cardStats: any;
  pillarStats: any
}

class DataVisView extends React.Component<IDataVisStateProps> {
  public render() {
    return (
      <div style={css.visContainer}>
        <DataVisHorBarView
          data={this.props.cardStats}
          xName={"balance"} yName={"id"}
          title={"Accept/Reject Balance"}
          description={"This chart shows the balance of players' choices for each selected card ((<Agree> - <Disagree>) / <total responses>)."}
        />
        <DataVisVertBarView
          data={this.props.cardStats}
          xName={"id"}
          yName={"total"}
          title={"Card Totals"}
          description={"Total number of times each card had been drawn and responded to."}
        />
        <DataVisVertBarView
          data={this.props.pillarStats}
          xName={"id"}
          yName={"value"}
          title={"Pillar Averages"}
          description={"Average pillar values in selected turns."}
        />
      </div>
    );
  }
}

export default DataVisView;
