import * as React from "react";
import * as css from "../styles/formStyles";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import { IGame } from "src/store/store";
interface IGameSelectorViewStateProps {
  game: IGame | null;
  games: string[];
  selectGameDispatch: (gameId: string) => void;
  selectStartingDeckDispatch: (cards: string[]) => void;
  newGameDispatch: (id: string) => void;
  saveGameDispatch: () => void;
}

class GameSelectorView extends React.Component<IGameSelectorViewStateProps> {
  public render() {
    const gameOnChange = (option: { label: string; value: string }) => {
      console.log(option);
      this.props.selectGameDispatch(option.value);
    };

    const deckOnChange = (options: Array<{ label: string; value: string }>) => {
      this.props.selectStartingDeckDispatch(options.map(o => o.value));
    };

    const onSubmit = (values: any) => {
      this.props.newGameDispatch(values.newGameId);
    };

    const initialValues = {
      game: null
    };

    const renderForm = (props: any) => {
      console.log(this.props.game);
      return (
        <>
          <div style={css.formCont}>
            <Form>
              <div style={css.vertFormGroupContainer}>
                <label style={css.formLabel}>Game:</label>
                <div style={css.formGroupElement}>
                  <Select
                    onChange={gameOnChange}
                    options={
                      this.props.games
                        ? this.props.games.map(g => ({ label: g, value: g }))
                        : []
                    }
                  />
                </div>

                <label style={css.formLabel}>Starting Deck:</label>
                <div style={css.formGroupElement}>
                  {this.props.game ? (
                    <Select
                      value={this.props.game.playDeck.map(c => ({
                        label: c,
                        value: c
                      }))}
                      closeMenuOnSelect={false}
                      isMulti={true}
                      onChange={deckOnChange}
                      options={Object.keys(this.props.game.cards).map(c => ({
                        label: c,
                        value: c
                      }))}
                    />
                  ) : null}
                </div>

                <label style={css.formLabel}>New Game:</label>
                <Field style={css.textElement} type="text" name={"newGameId"} />

                <div style={css.horFormGroupContainer}>
                  <button style={css.formButton} onClick={props.submitForm}>
                    Add Game
                  </button>

                  <button
                    style={css.formButton}
                    onClick={this.props.saveGameDispatch}
                  >
                    Save Current
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
