import * as React from "react";
import Select from "../../containers/common/Select";
import DataVis from "../../containers/data/DataVis";
import * as css from "../../styles/adminStyles";
import { ISelectedData, ICards, IPillars } from "src/store/store";
import ReactSelect from "react-select";
import { Form } from "formik";
import * as formCSS from "../../styles/formStyles";
import { ITurnRequest } from "src/store/requestTypes";
import * as converter from "json-2-csv";

interface IDataStateProps {
  selectedData: ISelectedData;
  cards: ICards;
  pillars: IPillars;
  processedData: { cardStats: any; pillarStats: any };
  games: string[];
  turns: ITurnRequest[];
  selectGameDispatch: (gameId: string) => void;
}

class DataView extends React.Component<IDataStateProps> {
  public render() {
    const gameOnChange = (option: { label: string; value: string }) => {
      console.log(option);
      this.props.selectGameDispatch(option.value);
    };

    const gameSelectForm = (
      <div style={formCSS.formCont}>
        <Form>
          <label style={formCSS.formLabel}>Game:</label>
          <div style={formCSS.formGroupElement}>
            <ReactSelect
              onChange={gameOnChange}
              options={
                this.props.games
                  ? this.props.games.map(g => ({ label: g, value: g }))
                  : []
              }
            />
          </div>
        </Form>
      </div>
    );

    const downloadCSV = () => {
      if (this.props.turns.length > 0) {
        converter.json2csv(
          this.props.turns,
          (err, data) => {
            if (data) {
              download("data.csv", data);
            } else {
              alert("Select data to export!");
            }
          },
          { expandArrayObjects: true }
        );
      }
    };

    const download = (filename: string, text: string) => {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };

    const exportCSVButton = (
      <div style={formCSS.formCont}>
        <button style={formCSS.formButton} onClick={downloadCSV}>
          Export
        </button>
      </div>
    );

    return (
      <div style={css.adminTopLevel}>
        <div style={css.adminLeftCont}>
          {gameSelectForm}
          <Select
            selectedCards={this.props.selectedData.cards}
            pillars={this.props.pillars}
            cards={this.props.cards}
          />
          {exportCSVButton}
        </div>
        <div style={{ ...css.adminVisCont, flexFlow: "row wrap" }}>
          <DataVis
            {...this.props.processedData}
            selectedData={this.props.selectedData}
          />
        </div>
      </div>
    );
  }
}

export default DataView;
