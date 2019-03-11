import * as React from "react";
import * as css from "src/styles/formStyles";

import { FormEvent } from "react";

interface ILoginViewProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => any;
}

class LoginView extends React.Component<ILoginViewProps> {
  public render() {
    return (
      <div>
        <form style={css.formCont} onSubmit={this.props.onSubmit}>
          <label style={css.formLabel} htmlFor="username">Enter username</label>
          <input  style={css.formElement} id="username" name="username" type="text" />
          <label style={css.formLabel} htmlFor="gameId">Enter game id</label>
          <input style={css.formElement}
            id="gameId"
            name="gameId"
            type="text"
            defaultValue="alienTest"
          />
          <div style = {css.formElement}> 
            <input style={css.formButton} type="submit" name="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginView;
