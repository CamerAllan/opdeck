import * as React from "react";
import { IResponses } from "../store/store";

import * as basicCSS from "../styles/basicStyles";
import * as css from "../styles/cardStyles";
import CardImage from "src/utils/CardImage";

interface ICardViewProps {
  name: string;
  text: string;
  responses: IResponses;
  fill: string;
  image: any;
}

class CardView extends React.Component<ICardViewProps> {
  public render() {
    return (
      <div style={css.card}>
        <div style={basicCSS.bodyFontCentered}>{this.props.name}</div>
        <div>{this.props.text}</div>
        <CardImage fill={this.props.fill} height={"500px"} width={"100%"} name={this.props.image} style={{}} />
      </div>
    );
  }
}

export default CardView;
