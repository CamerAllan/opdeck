import * as React from "react";
import PillarView from "../presentation/PillarView";
import { IPillars } from "../store/store";

import * as css from "../styles/pillarStyles";

interface IPillarProps {
  pillars: IPillars;
}

class Response extends React.Component<IPillarProps> {
  public render() {
    const pillars: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach(pillarName => {
      pillars.push(
        <PillarView name={pillarName} {...this.props.pillars[pillarName]} />
      );
    });
    return <div style={css.pillars}>{pillars}</div>;
  }
}
export default Response;
