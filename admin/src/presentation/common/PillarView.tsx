import * as React from "react";
import { IPillar } from "../../store/store";
import * as css from "../../styles/pillarStyles";

interface IPillarStateProps {
  id: string;
  pillar: IPillar;
}

class PillarView extends React.Component<IPillarStateProps> {
  public render() {
    const pillar: IPillar = this.props.pillar;

    return (
      <div style={css.pillar(pillar.colour)}>
        <div style={css.title}>{this.props.id}</div>
        <div style={css.description}>{pillar.description}</div>
        <div style={css.title}>
          {pillar.min}-{pillar.max}
        </div>
        <div style={css.title}>{pillar.value}</div>
      </div>
    );
  }
}

export default PillarView;
