import * as React from "react";

import { FormEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import LoginView from "src/presentation/LoginView";
import { addUser, startGame } from "../actions/actions";

interface ILoginDispatchProps {
  addUserDispatch: (userData: any) => void;
  startGameDispatch: (userData: any) => void;
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
      this.props.addUserDispatch(fd);
      this.props.startGameDispatch(fd);
    };
    return <LoginView onSubmit={onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUserDispatch: (userData: any) => dispatch(addUser(userData)),
  startGameDispatch: (userData: any) => dispatch(startGame(userData))
});

const mapStateToProps = () => {
  return;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
