import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { IStore, IPillar, IPillars } from "../../store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { addPillar, closeMenu } from "../../actions/actions";
import MakerAddPillarView from "../../presentation/maker/MakerAddPillarView";

interface IAddDispatchProps {
  addPillarDispatch: (id: string, pillar: IPillar) => void;
  closeMenuDispatch: () => void;
}

interface IAddPillarStateProps {
  pillars: IPillars;
}

type IAddProps = IAddDispatchProps & IAddPillarStateProps;

class Add extends React.Component<IAddProps> {
  constructor(props: IAddProps) {
    super(props);
  }

  public render() {
    return <MakerAddPillarView {...this.props} />;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  addPillarDispatch: (id: string, pillar: IPillar) =>
    dispatch(addPillar(id, pillar)),
  closeMenuDispatch: () => dispatch(closeMenu())
});

export default connect<null, IAddDispatchProps>(
  null,
  mapDispatchToProps
)(Add);
