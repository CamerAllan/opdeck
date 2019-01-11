import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { takeTurn, updateDecisionHover } from "../actions/actions";
import ResponsesView from "../presentation/ResponseView";
import { ITurnRequest } from "../store/requestTypes";
import {
  HoverLoc,
  IGameData,
  IResponses,
  IStore,
  IUserData,
  IPillars
} from "../store/store";

interface IResponseStateProps {
  userId: string;
  gameId: string;
  responses: IResponses;
  currentCard: string;
  turnNum: number;
  pillars: IPillars;
  drawCard: () => void;
}

interface IResponseDispatchProps {
  choiceDispatch: (choice: ITurnRequest) => void;
  hoverDispatch: (choice: HoverLoc) => void;
}

type IResponseProps = IResponseDispatchProps & IResponseStateProps;

class Response extends React.Component<IResponseProps> {
  public render() {
    const tc = {
      userId: this.props.userId,
      gameId: this.props.gameId,
      cardId: this.props.currentCard,
      turnNum: this.props.turnNum,
      pillars: this.props.pillars
    };
    const agreeFunction = () => {
      const c: ITurnRequest = {
        ...tc,
        answer: true
      };
      this.props.choiceDispatch(c);
      this.props.drawCard();
    };
    const disagreeFunction = () => {
      const c: ITurnRequest = {
        ...tc,
        answer: false
      };
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
  choiceDispatch: (choice: ITurnRequest) => dispatch(takeTurn(choice)),
  hoverDispatch: (choice: HoverLoc) => dispatch(updateDecisionHover(choice))
});

const mapStateToProps = (state: IStore, ownProps: IResponseStateProps) => {
  const gameData: IGameData = { ...state.gameData } as IGameData;
  const userData: IUserData = { ...state.userData } as IUserData;
  const card: string = gameData.currentCard;
  return {
    userId: userData.userId as string,
    gameId: gameData.gameId,
    responses: gameData.cards[card].contents.responses,
    currentCard: card,
    turnNum: gameData.turnNum,
    drawCard: ownProps.drawCard,
    pillars: gameData.pillars
  };
};

export default connect<IResponseStateProps, IResponseDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Response);
