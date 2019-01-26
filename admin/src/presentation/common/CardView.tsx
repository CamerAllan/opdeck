import * as React from "react";
import { ICard } from "../../store/store";
import * as css from "../../styles/cardStyles";

interface ICardStateProps {
  id: string;
  card: ICard;
}

class CardView extends React.Component<ICardStateProps> {
  public render() {
    const card: ICard = this.props.card;
    return (
      <div style={css.card}>
        <div style={css.contextContainer}>
          <div style={css.id}>{this.props.id}</div>
          <div style={css.title}>{card.contents.name}</div>
          <div style={css.description}>{card.contents.text}</div>
          <div style={css.textFade} />
        </div>
        <div style={css.choiceContainer}>
          <div style={css.choice}>
            {this.props.card.contents.responses.accept.text}
          </div>
          <div style={css.choice}>
            {this.props.card.contents.responses.reject.text}
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;
