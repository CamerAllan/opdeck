import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { IStore, ICard, ICards, IPillars } from "../../store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { addCard, closeMenu, deleteCard } from "../../actions/actions";
import MakerAddCardView from "../../presentation/maker/MakerAddCardView";

interface IAddDispatchProps {
  addCardDispatch: (id: string, card: ICard) => void;
  deleteCardDispatch: (id: string) => void;
  closeMenuDispatch: () => void;
}

interface IAddCardStateProps {
  selectedCard: string | null;
  cards: ICards;
  pillars: IPillars;
}

type IAddProps = IAddDispatchProps & IAddCardStateProps;

class Add extends React.Component<IAddProps> {
  constructor(props: IAddProps) {
    super(props);
  }

  public render() {
    return (
      <MakerAddCardView {...this.props} cardToEdit={this.props.selectedCard} />
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  addCardDispatch: (id: string, card: ICard) => dispatch(addCard(id, card)),
  deleteCardDispatch: (id: string) => dispatch(deleteCard(id)),
  closeMenuDispatch: () => dispatch(closeMenu())
});

export default connect<null, IAddDispatchProps>(
  null,
  mapDispatchToProps
)(Add);
