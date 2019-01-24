import * as React from "react";
import { IPillars, IPillar } from "../../store/store";
import { Field, Formik, Form } from "formik";
import * as css from "../../styles/formStyles";

interface IMakerAddPillarStateProps {
  pillars: IPillars;
  addPillarDispatch: (id: string, pillar: IPillar) => void;
  closeMenuDispatch: () => void;
}

class MakerAddPillarView extends React.Component<IMakerAddPillarStateProps> {
  public render() {
    const initialValues = {
      name: "",
      description: "",
      min: 0,
      max: 10,
      colour: "#123456"
    };

    const onSubmit = (values: any) => {
      console.log(JSON.stringify(values));
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

    return (
      <div>
        <Formik
          initialValues={initialValues}
          // validate={this.validate}
          onSubmit={onSubmit}
        >
          <Form>
            <div style={css.horFormGroupContainer}>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Name:</label>
                <Field type="text" name="id" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Description:</label>
                <Field type="text" component="textarea" name="description" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Minimum value:</label>
                <Field type="number" name="min" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Maximum value:</label>
                <Field type="number" name="max" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Initial value:</label>
                <Field type="number" name="value" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Colour:</label>
                <Field type="text" name="colour" />
              </div>
            </div>

            <button onClick={this.props.closeMenuDispatch}>Cancel</button>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default MakerAddPillarView;
