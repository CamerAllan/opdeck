import * as React from "react";
import { IPillars, IPillar } from "../../store/store";
import { Field, Formik, Form } from "formik";
import * as css from "../../styles/formStyles";
import MakerEditPreviewView from "./MakerEditPreviewView";
import PillarView from "../common/PillarView";

interface IMakerAddPillarStateProps {
  pillarToEdit: string | null;
  pillars: IPillars;
  deletePillarDispatch: (id: string) => void;
  addPillarDispatch: (id: string, pillar: IPillar) => void;
  closeMenuDispatch: () => void;
}

class MakerAddPillarView extends React.Component<IMakerAddPillarStateProps> {
  public render() {
    let initialValues = {};
    if (this.props.pillarToEdit) {
      const pillar: IPillar = this.props.pillars[this.props.pillarToEdit];
      initialValues = {
        id: this.props.pillarToEdit,
        description: pillar.description,
        min: pillar.min,
        max: pillar.max,
        colour: pillar.colour
      };
    } else {
      initialValues = {
        id: "",
        description: "",
        min: 0,
        max: 10,
        colour: "#DDDDDD"
      };
    }

    const onSubmit = (values: any) => {
      const pillar: IPillar = {
        description: values.description,
        value: values.value,
        min: values.min,
        max: values.max,
        colour: values.colour
      };

      this.props.addPillarDispatch(values.id, pillar);
      this.props.closeMenuDispatch();
    };

    const renderForm = (props: any) => {
      console.log(props.values);
      return (
        <>
          <div style={css.formCont}>
            <Form>
              <div style={css.horFormGroupContainer}>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Name:</label>
                  <Field style={css.textElement} type="text" name="id" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Description:</label>
                  <Field
                    style={css.textAreaElement}
                    type="text"
                    component="textarea"
                    name="description"
                  />
                </div>
              </div>

              <div style={css.horFormGroupContainer}>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Minimum value:</label>
                  <Field style={css.textElement} type="number" name="min" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Maximum value:</label>
                  <Field style={css.textElement} type="number" name="max" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Initial value:</label>
                  <Field style={css.textElement} type="number" name="value" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Colour:</label>
                  <Field style={css.textElement} type="text" name="colour" />
                </div>
              </div>

              <button
                style={css.formButton}
                onClick={this.props.closeMenuDispatch}
              >
                Cancel
              </button>
              <button style={css.formButton} type="submit">
                Submit
              </button>
            </Form>
          </div>

          <MakerEditPreviewView
            id={props.values.id}
            preview={
              <PillarView id={props.values.id} pillar={{ ...props.values }} />
            }
            closeMenuDispatch={this.props.closeMenuDispatch}
            deleteItem={this.props.deletePillarDispatch}
            submitForm={props.submitForm}
          />
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

export default MakerAddPillarView;
