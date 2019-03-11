import * as React from "react";
import * as css from "../styles/formStyles";

class GameOverView extends React.Component<any> {

  public render() {

    const onclick = () => location.reload();

    return (
      <div style={css.formCont}>
        <div style={css.formLabel}>
          Game Over!
        </div>
        <div style={css.formGroupElement}>
          <button style={css.formButton} onClick={onclick}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default GameOverView;
