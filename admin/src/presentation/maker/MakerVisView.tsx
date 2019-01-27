/** @jsx jsx */
import * as React from "react";
import { ICards, ISelectedData, IPillars } from "../../store/store";
import * as makerCSS from "../../styles/maker/makerVisStyles";
import * as adminCSS from "../../styles/adminStyles";
import CardView from "../../presentation/common/CardView";
import PillarView from "../../presentation/common/PillarView";
import { css, jsx } from "@emotion/core";

interface IMakerVisStateProps {
  cards: ICards;
  pillars: IPillars;
  selectedData: ISelectedData;
  selectCardDispatch: (id: string) => void;
  selectPillarDispatch: (id: string) => void;
  openAddCardDispatch: () => void;
  openAddPillarDispatch: () => void;
}

class MakerVisView extends React.Component<IMakerVisStateProps> {
  public render() {
    const containerHoverStyle = css`
      &:hover {
        transition: 0.5s ease-out;
        min-width: 225px !important;
        height: 300px !important;
      }
    `;
    const pillarDisplay: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach(id => {
      const pillar = this.props.pillars[id];
      const onClick = () => {
        this.props.selectPillarDispatch(id);
      };
      pillarDisplay.push(
        <div
          css={containerHoverStyle}
          style={makerCSS.cardContainer}
          onClick={onClick}
        >
          <PillarView id={id} pillar={pillar} />
        </div>
      );
    });

    const cardDisplay: JSX.Element[] = [];
    Object.keys(this.props.cards).forEach(id => {
      const card = this.props.cards[id];
      const onClick = () => {
        this.props.selectCardDispatch(id);
      };
      cardDisplay.push(
        <div
          css={containerHoverStyle}
          style={makerCSS.cardContainer}
          onClick={onClick}
        >
          <CardView id={id} card={card} />
        </div>
      );
    });

    return (
      <div style={makerCSS.visContainer}>
        <div style={adminCSS.adminArea}>
          <div style={adminCSS.adminAreaHeader}>
            Pillars
            <button
              style={adminCSS.adminButton}
              onClick={this.props.openAddPillarDispatch}
            >
              +
            </button>
          </div>

          <div style={makerCSS.pillarVis}>{pillarDisplay}</div>
        </div>
        <div style={adminCSS.adminArea}>
          <div style={adminCSS.adminAreaHeader}>
            Cards
            <button
              style={adminCSS.adminButton}
              onClick={this.props.openAddCardDispatch}
            >
              +
            </button>
          </div>

          <div style={makerCSS.cardVis}>{cardDisplay}</div>
        </div>
      </div>
    );
  }
}

export default MakerVisView;
