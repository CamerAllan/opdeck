import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { choose, updateDecisionHover } from "../actions/actions";
import ResponsesView from "../presentation/ResponseView";
import { IChooseRequest } from "../store/requestTypes";
import { HoverLoc, IResponses, IStore } from "../store/store";

interface IResponseStateProps {
  gameId: string;
  responses: IResponses;
  currentCard: string;
  drawCard: () => void;
}

interface IResponseDispatchProps {
  choiceDispatch: (choice: IChooseRequest) => void;
  hoverDispatch: (choice: HoverLoc) => void;
}

type IResponseProps = IResponseDispatchProps & IResponseStateProps;

class Response extends React.Component<IResponseProps> {
  public render() {
    const tc = {
      gameId: this.props.gameId,
      cardId: this.props.currentCard
    };
    const agreeFunction = () => {
      const c: IChooseRequest = { ...tc, answer: true };
      this.props.choiceDispatch(c);
      this.props.drawCard();
    };
    const disagreeFunction = () => {
      const c: IChooseRequest = { ...tc, answer: false };
      this.props.choiceDispatch(c);
      this.props.drawCard();
    };
    const agreeHoverFunction = () => {
      this.props.hoverDispatch(HoverLoc.ACCEPT);
    };
    const disagreeHoverFunction = () => {
      this.props.hoverDispatch(HoverLoc.REJECT);
    };
    const offHoverFunction = () => {
      this.props.hoverDispatch(HoverLoc.ELSE);
    };

    return (
      <ResponsesView
        responses={this.props.responses}
        agreeFunction={agreeFunction}
        disagreeFunction={disagreeFunction}
        agreeHoverFunction={agreeHoverFunction}
        disagreeHoverFunction={disagreeHoverFunction}
        offHoverFunction={offHoverFunction}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  choiceDispatch: (choice: IChooseRequest) => dispatch(choose(choice)),
  hoverDispatch: (choice: HoverLoc) => dispatch(updateDecisionHover(choice))
});

const mapStateToProps = (state: IStore, ownProps: IResponseStateProps) => {
  const card: string = state.gameData.currentCard;
  return {
    gameId: state.gameData.gameId,
    responses: state.gameData.cards[card].contents.responses,
    currentCard: card,
    drawCard: ownProps.drawCard
  };
};

export default connect<IResponseStateProps, IResponseDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Response);
