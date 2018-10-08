import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { choose, updateDecisionHover } from "../actions/actions";
import ResponsesView from "../presentation/ResponseView";
import { HoverLoc, IResponses, IStore } from "../store/store";

interface IResponseStateProps {
  responses: IResponses;
  currentCard: string;
  drawCard: () => void;
}

interface IResponseDispatchProps {
  choiceDispatch: (cardId: string, choice: boolean) => void;
  hoverDispatch: (choice: HoverLoc) => void;
}

type IResponseProps = IResponseDispatchProps & IResponseStateProps;

class Response extends React.Component<IResponseProps> {
  public render() {
    const agreeFunction = () => {
      this.props.choiceDispatch(this.props.currentCard, true);
      this.props.drawCard();
    };
    const disagreeFunction = () => {
      this.props.choiceDispatch(this.props.currentCard, false);
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
  choiceDispatch: (cardId: string, choice: boolean) =>
    dispatch(choose(cardId, choice)),
  hoverDispatch: (choice: HoverLoc) => dispatch(updateDecisionHover(choice))
});

const mapStateToProps = (state: IStore, ownProps: IResponseStateProps) => {
  const card: string = state.gameData.currentCard;
  return {
    responses: state.gameData.cards[card].contents.responses,
    currentCard: card,
    drawCard: ownProps.drawCard
  };
};

export default connect<IResponseStateProps, IResponseDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Response);
