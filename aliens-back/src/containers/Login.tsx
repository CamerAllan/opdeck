import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import LoginView from "src/presentation/LoginView";
import { login } from "../actions/actions";
import { IStore } from "../store/store";

interface ILoginDispatchProps {
  loginDispatch: (userId: string) => void;
}

interface ILoginStateProps {
  userId: string;
}

type ILoginProps = ILoginDispatchProps & ILoginStateProps;

class Login extends React.Component<ILoginProps> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    return <LoginView {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginDispatch: (userId: string) => dispatch(login(userId))
});

const mapStateToProps = (state: IStore, ownProps: ILoginStateProps) => {
  return { userId: ownProps.userId };
};

export default connect<ILoginStateProps, ILoginDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
