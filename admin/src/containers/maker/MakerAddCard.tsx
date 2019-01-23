import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { IStore, ICard, ICards, IPillars } from "../../store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { addCard, closeMenu } from "../../actions/actions";
import MakerAddCardView from "../../presentation/maker/MakerAddCardView";

interface IAddDispatchProps {
  addCardDispatch: (id: string, card: ICard) => void;
  closeMenuDispatch: () => void;
}

interface IAddCardStateProps {
  cards: ICards;
  pillars: IPillars;
}

type IAddProps = IAddDispatchProps & IAddCardStateProps;

class Add extends React.Component<IAddProps> {
  constructor(props: IAddProps) {
    super(props);
  }

  public render() {
    return <MakerAddCardView {...this.props} />;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  addCardDispatch: (id: string, card: ICard) => dispatch(addCard(id, card)),
  closeMenuDispatch: () => dispatch(closeMenu())
});

export default connect<null, IAddDispatchProps>(
  null,
  mapDispatchToProps
)(Add);
