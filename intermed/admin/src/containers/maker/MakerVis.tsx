import * as React from "react";

import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IStore, ICards, IPillars, ISelectedData } from "../../store/store";
import MakerVisView from "../../presentation/maker/MakerVisView";
import {
  selectPillar,
  selectCard,
  openAddCardMenu,
  openAddPillarMenu
} from "src/actions/actions";

interface IMakerVisDispatchProps {
  selectCardDispatch: (id: string) => void;
  selectPillarDispatch: (id: string) => void;
  openAddCardDispatch: () => void;
  openAddPillarDispatch: () => void;
}

interface IMakerVisStateProps {
  cards: ICards;
  pillars: IPillars;
  selectedData: ISelectedData;
}

type IMakerVisProps = IMakerVisDispatchProps & IMakerVisStateProps;

class MakerVis extends React.Component<IMakerVisProps> {
  constructor(props: IMakerVisProps) {
    super(props);
  }

  public render() {
    return <MakerVisView {...this.props} />;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  selectCardDispatch: (id: string) => dispatch(selectCard(id)),
  selectPillarDispatch: (id: string) => dispatch(selectPillar(id)),
  openAddCardDispatch: () => dispatch(openAddCardMenu()),
  openAddPillarDispatch: () => dispatch(openAddPillarMenu())
});

export default connect<IMakerVisStateProps, IMakerVisDispatchProps>(
  null,
  mapDispatchToProps
)(MakerVis);
