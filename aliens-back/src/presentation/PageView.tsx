import * as React from "react";
import { connect } from "react-redux";

import Game from "src/containers/Game";
import Login from "src/containers/Login";
import { IStore } from "src/store/store";
import * as css from "src/styles/TopLevelStyles";

class Page extends React.Component<IStore> {
  public render() {
    return (
      <div style={css.top}>
        <div style={css.leftMargin} />
        <div style={css.middle}>
          <div style={css.header} />
          <div style={css.body}>
            {!this.props.userData ? (
              <Login {...this.props.userData} />
            ) : (
              <Game {...this.props.gameData} />
            )}
          </div>
          <div style={css.footer} />
        </div>
        <div style={css.rightMargin} />
      </div>
    );
  }
}

const mapStateToProps: (state: IStore) => IStore = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Page);
