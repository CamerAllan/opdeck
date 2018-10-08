import * as React from "react";
import * as basicCSS from "../styles/basicStyles";
import * as css from "../styles/pillarStyles";

interface IPillarViewProps {
  name: string;
  value: number;
  min: number;
  max: number;
  description: string;
  effect: number;
}

class PillarView extends React.Component<IPillarViewProps> {
  public render() {
    let pillarStyle = css.pillar;
    if (this.props.effect !== 0) {
      if (this.props.effect > 0) {
        pillarStyle = css.raisePillar;
      } else {
        pillarStyle = css.lowerPillar;
      }
    }
    return (
      <div style={pillarStyle}>
        <div style={basicCSS.bodyFontCentered}>{this.props.name}</div>
        <div style={basicCSS.bodyFontCentered}>{this.props.value}</div>
      </div>
    );
  }
}

export default PillarView;
