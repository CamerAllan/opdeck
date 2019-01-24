import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "src/store/store";
import Data from "src/containers/data/Data";
// import * as css from "src/styles/TopLevelStyles";
import { BrowserRouter, Route } from "react-router-dom";
import Maker from "../containers/maker/Maker";
import Home from "../containers/Home";
import "react-vis/dist/style.css";

class Page extends React.Component<IStore> {
  public render() {
    const home = () => (
      <div className="App">
        <Home />
      </div>
    );

    const data = () => (
      <div className="App">
        <Data />
      </div>
    );

    const maker = () => (
      <div className="App">
        <Maker />
      </div>
    );

    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={home} />
          <Route exact={true} path="/data" render={data} />
          <Route exact={true} path="/maker" render={maker} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps: (state: IStore) => IStore = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Page);
