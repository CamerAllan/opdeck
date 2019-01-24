import * as React from "react";
import { ICards, ISelectedData, IPillars } from "../../store/store";
import * as css from "../../styles/maker/makerVisStyles";
import * as adminCSS from "../../styles/adminStyles";
import CardView from "../../presentation/common/CardView";
import PillarView from "../../presentation/common/PillarView";
interface IMakerVisStateProps {
  cards: ICards;
  pillars: IPillars;
  selectedData: ISelectedData;
}

class MakerVisView extends React.Component<IMakerVisStateProps> {
  public render() {
    const pillarDisplay: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach(id => {
      const pillar = this.props.pillars[id];
      pillarDisplay.push(
        <div style={css.cardContainer}>
          <PillarView id={id} pillar={pillar} />
        </div>
      );
    });

    const cardDisplay: JSX.Element[] = [];
    Object.keys(this.props.cards).forEach(id => {
      const card = this.props.cards[id];
      cardDisplay.push(
        <div style={css.cardContainer}>
          <CardView id={id} card={card} />
        </div>
      );
    });

    return (
      <div style={css.visContainer}>
        <div style={adminCSS.adminArea}>
          <div style={adminCSS.adminAreaHeader}>Pillars</div>
          <div style={css.pillarVis}>{pillarDisplay}</div>
        </div>
        <div style={adminCSS.adminArea}>
          <div style={adminCSS.adminAreaHeader}>Cards</div>
          <div style={css.cardVis}>{cardDisplay}</div>
        </div>
      </div>
    );
  }
}

export default MakerVisView;
