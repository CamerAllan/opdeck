import * as React from "react";
import * as css from "../../styles/formStyles";

interface IGameInfoViewStateProps {
  pillarBalances: { [pillar: string]: number };
  notAdded: string[];
}

class GameInfoView extends React.Component<IGameInfoViewStateProps> {
  public render() {
    const balances: JSX.Element[] = [];
    const notAdded: JSX.Element[] = [];

    Object.keys(this.props.pillarBalances).forEach(pb => {
      balances.push(
        <li>
          {pb}: {this.props.pillarBalances[pb]}
        </li>
      );
    });

    this.props.notAdded.forEach(na => {
      notAdded.push(<li>{na}</li>);
    });

    const notAddedWarning =
      notAdded.length > 0 ? (
        <>
          <label style={css.formLabel}>
            Warning! These cards are not added to the game by any others:
          </label>
          {notAdded}
        </>
      ) : null;

    return (
      <div style={css.formCont}>
        <label style={css.formLabel}>Pillar effect balance:</label>
        {balances}
        {notAddedWarning}
      </div>
    );
  }
}

export default GameInfoView;
