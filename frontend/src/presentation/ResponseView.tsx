import * as React from "react";
import { IResponses } from "../store/store";
import * as css from "../styles/responseStyles";

interface IResponseViewProps {
  responses: IResponses;
  agreeFunction: () => void;
  disagreeFunction: () => void;
  agreeHoverFunction: () => void;
  disagreeHoverFunction: () => void;
  offHoverFunction: () => void;
}

class ResponsesView extends React.Component<IResponseViewProps> {
  public render() {
    return (
      <div style={css.responses}>
        <button
          onClick={this.props.disagreeFunction}
          onMouseEnter={this.props.disagreeHoverFunction}
          onMouseLeave={this.props.offHoverFunction}
          style={css.response}
        >
          {this.props.responses.reject.text}
        </button>
        <button
          onClick={this.props.agreeFunction}
          onMouseEnter={this.props.agreeHoverFunction}
          onMouseLeave={this.props.offHoverFunction}
          style={css.response}
        >
          {this.props.responses.accept.text}
        </button>
      </div>
    );
  }
}

export default ResponsesView;
