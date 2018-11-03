import * as React from "react";

import * as basicCSS from "../styles/basicStyles";
// import * as css from "../styles/loginStyles";

interface ILoginViewProps {
  userId: string;
}

class LoginView extends React.Component<ILoginViewProps> {
  public render() {
    return (
      <div>
        <div style={basicCSS.bodyFontCentered}>{this.props.userId}</div>
        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginView;
