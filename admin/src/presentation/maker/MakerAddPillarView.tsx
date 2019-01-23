import * as React from "react";
import { IPillars, IPillar } from "../../store/store";

interface IMakerAddPillarStateProps {
  pillars: IPillars;
  addPillarDispatch: (id: string, pillar: IPillar) => void;
  closeMenuDispatch: () => void;
}

class MakerAddPillarView extends React.Component<IMakerAddPillarStateProps> {
  public render() {
    return (
      <div>
        fuesterioujs
        <button onClick={this.props.closeMenuDispatch}>Cancel</button>
      </div>
    );
  }
}

export default MakerAddPillarView;
