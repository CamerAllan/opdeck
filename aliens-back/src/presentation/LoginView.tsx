import * as React from "react";

import { FormEvent } from "react";
// import * as basicCSS from "../styles/basicStyles";
// import * as css from "../styles/loginStyles";

interface ILoginViewProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => any;
}

class LoginView extends React.Component<ILoginViewProps> {
  public render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
        </form>
      </div>
    );
  }
}

export default LoginView;
