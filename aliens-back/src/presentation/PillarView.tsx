import * as React from "react";
import * as basicCSS from "../styles/basicStyles";
import * as css from "../styles/pillarStyles";

interface IPillarViewProps {
  name: string;
  value: number;
  min: number;
  max: number;
  description: string;
}

class PillarView extends React.Component<IPillarViewProps> {
  public render() {
    return (
      <div style={css.pillar}>
        <div style={basicCSS.bodyFontCentered}>{this.props.name}</div>
        <div style={basicCSS.bodyFontCentered}>{this.props.value}</div>
      </div>
    );
  }
}

export default PillarView;
