import * as React from "react";
import * as css from "../styles/formStyles";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
interface IGameSelectorViewStateProps {
  games: string[];
  selectGameDispatch: (gameId: string) => void;
  newGameDispatch: (id: string) => void;
  saveGameDispatch: () => void;
}

class GameSelectorView extends React.Component<IGameSelectorViewStateProps> {
  public render() {
    const onChange = (option: { label: string; value: string }) => {
      console.log(option);
      this.props.selectGameDispatch(option.value);
    };

    const onSubmit = (values: any) => {
      this.props.newGameDispatch(values.newGameId);
    };

    const initialValues = {
      game: null
    };

    const renderForm = (props: any) => {
      return (
        <>
          <div style={css.formCont}>
            <Form>
              <div style={css.vertFormGroupContainer}>
                <div style={css.formLabel}>Game:</div>
                <div style={css.formElement}>
                  <Select
                    onChange={onChange}
                    options={
                      this.props.games
                        ? this.props.games.map(g => ({ label: g, value: g }))
                        : []
                    }
                  />
                  #<label style={css.formLabel}>New Game:</label>
                  <Field
                    style={css.textElement}
                    type="text"
                    name={"newGameId"}
                  />
                  <Field
                    name={"addGame"}
                    type={"button"}
                    style={css.formButton}
                    onClick={props.submitForm}
                  />
                  <button
                    style={css.formButton}
                    onClick={this.props.saveGameDispatch}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </>
      );
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={renderForm}
      />
    );
  }
}

export default GameSelectorView;
