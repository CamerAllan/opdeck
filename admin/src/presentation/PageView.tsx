import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "src/store/store";
import Data from "src/containers/data/Data";
import * as css from "src/styles/TopLevelStyles";
import { BrowserRouter, Route } from "react-router-dom";
import Maker from "../containers/maker/Maker"
import Home from "../containers/Home"

class Page extends React.Component<IStore> {
  public render() {

    const home = () => (
      <div className="App">
        <Home />
      </div>
    )

    const data = () => (
      <div className="App">
        <div style={css.top}>
          <div style={css.middle}>
            <div style={css.header} />
            <div style={css.body}>
              <Data />
            </div>
            <div style={css.footer} />
          </div>
        </div>
      </div>
    )

    const maker = () => (
      <div className="App">
        <div style={css.top}>
          <div style={css.middle}>
            <div style={css.header} />
            <div style={css.body}>
              <Maker />
            </div>
            <div style={css.footer} />
          </div>
        </div>
      </div>
    )

    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={home} />
          <Route exact={true} path='/data' render={data} />
          <Route exact={true} path='/maker' render={maker} />
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
