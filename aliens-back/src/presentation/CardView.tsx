import * as React from "react";
import { IResponses } from "../store/store";

import * as basicCSS from "../styles/basicStyles";
import * as css from "../styles/cardStyles";

interface ICardViewProps {
  name: string;
  text: string;
  image: string;
  responses: IResponses;
}

class CardView extends React.Component<ICardViewProps> {
  public render() {
    return (
      <div style={css.card}>
        <div style={basicCSS.bodyFontCentered}>{this.props.name}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default CardView;
