import * as React from "react";
import { IResponses } from "../store/store";
import * as css from "../styles/responseStyles";

interface IResponseViewProps {
  responses: IResponses;
  agreeFunction: () => void;
  disagreeFunction: () => void;
}

class ResponseView extends React.Component<IResponseViewProps> {
  public render() {
    return (
      <div style={css.responses}>
        <button onClick={this.props.disagreeFunction} style={css.response}>
          {this.props.responses.reject.text}
        </button>
        <button onClick={this.props.agreeFunction} style={css.response}>
          {this.props.responses.accept.text}
        </button>
      </div>
    );
  }
}

export default ResponseView;
