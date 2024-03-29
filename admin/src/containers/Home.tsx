import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../store/store";

class Home extends React.Component<IStore> {
  public render() {
    return (
      <div id="container">
        <a href="data">Data</a>
        <a href="maker">Maker</a>
      </div>
    );
  }
}

const mapStateToProps: (state: IStore) => IStore = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Home);
