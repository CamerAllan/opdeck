import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "src/store/store";
import * as css from "src/styles/TopLevelStyles";
import Data from "src/containers/Data";

class Page extends React.Component<IStore> {
  public render() {
    return (
      <div style={css.top}>
        {/* <div style={css.leftMargin} /> */}
        <div style={css.middle}>
          <div style={css.header} />
          <div style={css.body}>
            <Data />
          </div>
          <div style={css.footer} />
        </div>
        {/* <div style={css.rightMargin} /> */}
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
