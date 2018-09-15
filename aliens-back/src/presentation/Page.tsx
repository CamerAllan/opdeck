import * as React from "react";
import * as css from "../styles/TopLevelStyles";

class Page extends React.Component {
  public render() {
    return (
      <div className={css.top}>
        <div className={css.leftMargin} />
        <div className={css.middle}>
          <div className={css.header}>HEADER</div>
          <div className={css.body}>
            Hello :) INSERT PRESETNAITIPONAF STUFDF HERE
          </div>
          <div className={css.footer}>FOOTER</div>
        </div>
        <div className={css.rightMargin} />
      </div>
    );
  }
}
export default Page;
