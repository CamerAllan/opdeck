import * as React from "react";
import GameInfoView from "../presentation/maker/GameInfoView";
import { IGame } from "src/store/store";

interface IGameInfoStateProps {
  game: IGame;
}

type GameInfoProps = IGameInfoStateProps;

class GameInfo extends React.Component<GameInfoProps> {
  public render() {
    const pillarBalances = {};
    const addedCards = new Set();
    const cards = new Set();
    const game = this.props.game;
    this.props.game.playDeck.forEach(c => addedCards.add(c));
    Object.keys(game.cards).forEach(cardName => {
      cards.add(cardName);
      Object.keys(
        game.cards[cardName].contents.responses.accept.effects
      ).forEach(effectPillar => {
        const effect =
          game.cards[cardName].contents.responses.accept.effects[effectPillar];
        pillarBalances[effectPillar] =
          pillarBalances[effectPillar] !== undefined
            ? pillarBalances[effectPillar] + effect
            : 0;
      });

      game.cards[cardName].contents.responses.accept.cardsAdded.forEach(
        added => {
          addedCards.add(added);
        }
      );

      Object.keys(
        game.cards[cardName].contents.responses.reject.effects
      ).forEach(effectPillar => {
        const effect =
          game.cards[cardName].contents.responses.reject.effects[effectPillar];
        pillarBalances[effectPillar] =
          pillarBalances[effectPillar] !== undefined
            ? pillarBalances[effectPillar] + effect
            : 0;
      });

      game.cards[cardName].contents.responses.reject.cardsAdded.forEach(
        added => {
          addedCards.add(added);
        }
      );
    });

    const difference = [...cards].filter(x => !addedCards.has(x));

    return (
      <div>
        <GameInfoView pillarBalances={pillarBalances} notAdded={difference} />
      </div>
    );
  }
}

export default GameInfo;
