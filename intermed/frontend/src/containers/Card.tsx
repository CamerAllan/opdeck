import * as React from "react";
import CardView from "../presentation/CardView";
import { ICardContents, IPillars, IEffects } from "../store/store";

interface ICardProps {
  pillars: IPillars;
  contents: ICardContents;
}

class Card extends React.Component<ICardProps> {

  public render() {

    // Get image

    // Get image colour
    const acceptEffects: IEffects = this.props.contents.responses.accept.effects;
    const rejectEffects: IEffects = this.props.contents.responses.reject.effects;
    let fill = "#888888";
    const pillarEffects: string[] = [];
    if (acceptEffects) {
      Object.keys(acceptEffects).forEach((e) => pillarEffects.push(e))
    } else {
      if (rejectEffects) {
        Object.keys(acceptEffects).forEach((e) => pillarEffects.push(e))
      }
    }

    const mainPillar = pillarEffects[0];

    fill = this.props.pillars[mainPillar].colour;

    const image = pillarEffects[1] ? pillarEffects[1] : mainPillar;

    return <CardView {...{ ...this.props.contents, image, fill }} />;
  }
}
export default Card;
