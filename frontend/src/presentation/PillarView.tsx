import * as React from "react";
import * as basicCSS from "../styles/basicStyles";
import * as css from "../styles/pillarStyles";

interface IPillarViewProps {
  name: string;
  value: number;
  min: number;
  max: number;
  description: string;
  colour: string;
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

    const percentageFill =
      100 * (this.props.value / (this.props.max - this.props.min));

    return (
      <>
        <div style={pillarStyle}>
          <div style={basicCSS.bodyFontCentered}>{this.props.name}</div>
          <div style={css.pillarBarOutline(this.props.colour)}>
            <div style={css.pillarBarFill(percentageFill)} />
          </div>
        </div>
      </>
    );
  }
}

export default PillarView;
