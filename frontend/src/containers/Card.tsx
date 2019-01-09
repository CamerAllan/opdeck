import * as React from "react";
import CardView from "../presentation/CardView";
import { ICardContents } from "../store/store";

interface ICardProps {
  contents: ICardContents;
}

class Card extends React.Component<ICardProps> {
  public render() {
    return <CardView {...this.props.contents} />;
  }
}
export default Card;
