import * as React from "react";

import { FormEvent } from "react";
import { connect } from "react-redux";
import { AnyAction, } from "redux";
import LoginView from "src/presentation/LoginView";
import { addUser, startGame } from "../actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { IStore, IUserData } from "src/store/store";

interface ILoginDispatchProps {
  addUserDispatch: (userData: IUserData) => void;
  startGameDispatch: (userData: IUserData, gameName: string) => void;
}

type ILoginProps = ILoginDispatchProps;

class Login extends React.Component<ILoginProps> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    const onSubmit: (event: FormEvent<HTMLFormElement>) => void = event => {
      event.preventDefault();
      const fd: FormData = new FormData(event.target as any);
      const userId = fd.get("username");
      if (typeof userId === "string") {
        this.props.addUserDispatch({ userId });
        this.props.startGameDispatch({ userId }, "alienTest");
      }
    };
    return <LoginView onSubmit={onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, any, AnyAction>) => ({
  addUserDispatch: (userData: IUserData) => dispatch(addUser(userData)),
  startGameDispatch: (userData: IUserData, gameName: string) => dispatch(startGame(userData, gameName))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
