import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { IStore, ICard, IPillar } from "../../store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import {
  openAddCardMenu,
  openAddPillarMenu,
  addCard,
  addPillar
} from "../../actions/actions";

interface IAddDispatchProps {
  openAddCardDispatch: () => void;
  openAddPillarDispatch: () => void;
  addCardDispatch: (id: string, card: ICard) => void;
  addPillarDispatch: (id: string, pillar: IPillar) => void;
}

type IAddProps = IAddDispatchProps;

class Add extends React.Component<IAddProps> {
  constructor(props: IAddProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <button onClick={this.props.openAddCardDispatch}>New Card</button>
        <button onClick={this.props.openAddPillarDispatch}>New Pillar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  openAddCardDispatch: () => dispatch(openAddCardMenu()),
  openAddPillarDispatch: () => dispatch(openAddPillarMenu()),
  addCardDispatch: (id: string, card: ICard) => dispatch(addCard(id, card)),
  addPillarDispatch: (id: string, pillar: IPillar) =>
    dispatch(addPillar(id, pillar))
});

export default connect<null, IAddDispatchProps>(
  null,
  mapDispatchToProps
)(Add);
