import * as React from "react";
import PillarView from "../presentation/PillarView";
import { IEffects, IPillars } from "../store/store";

import * as css from "../styles/pillarStyles";

interface IPillarProps {
  pillars: IPillars;
  effectWeightings: IEffects;
}

class Response extends React.Component<IPillarProps> {
  public render() {
    const pillars: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach(pillarName => {
      const effect = this.props.effectWeightings[pillarName]
        ? this.props.effectWeightings[pillarName]
        : 0;
      pillars.push(
        <PillarView
          name={pillarName}
          {...this.props.pillars[pillarName]}
          effect={effect}
        />
      );
    });
    return <div style={css.pillars}>{pillars}</div>;
  }
}
export default Response;
