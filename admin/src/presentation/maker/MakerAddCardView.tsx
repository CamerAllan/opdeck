import * as React from "react";
import { ICards, ICard, IPillars } from "../../store/store";
import { Formik, Form, Field } from "formik";
import SelectField from "../form/SelectField";
import * as css from "../../styles/formStyles";

interface IMakerAddCardStateProps {
  cards: ICards;
  pillars: IPillars;
  addCardDispatch: (id: string, card: ICard) => void;
  closeMenuDispatch: () => void;
}

class MakerAddCardView extends React.Component<IMakerAddCardStateProps> {
  public render() {
    const initialValues = {
      id: "",
      name: "",
      text: "",
      acceptText: "",
      rejectText: ""
    };
    const cardOptions: Array<{ label: string; value: string }> = [];
    Object.keys(this.props.cards).forEach((card: string) => {
      cardOptions.push({ label: card, value: card });
    });

    const pillarAcceptConsequences: JSX.Element[] = [];
    const pillarRejectConsequences: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach((pillar: string) => {
      pillarAcceptConsequences.push(
        <>
          <label style={css.formLabel}>{pillar} Effect:</label>
          <Field type="number" name={`accept${pillar}Effect`} />
        </>
      );
      pillarRejectConsequences.push(
        <>
          <label style={css.formLabel}>{pillar} Effect:</label>
          <Field type="number" name={`reject${pillar}Effect`} />
        </>
      );
    });

    const onSubmit = (values: any) => {
      console.log(JSON.stringify(values));
      const card: ICard = {
        contents: {
          name: values.name,
          text: values.text,
          responses: {
            accept: {
              text: values.acceptText,
              cardsAdded: values.acceptCardsAdded
                ? values.acceptCardsAdded
                : [],
              cardsRemoved: values.acceptCardsRemoved
                ? values.acceptCardsRemoved
                : [],
              effects: {}
            },
            reject: {
              text: values.rejectText,
              cardsAdded: values.rejectCardsAdded
                ? values.rejectCardsAdded
                : [],
              cardsRemoved: values.rejectCardsRemoved
                ? values.rejectCardsRemoved
                : [],
              effects: {}
            }
          }
        },
        weightings: {}
      };

      this.props.addCardDispatch(values.id, card);
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
                <label style={css.formLabel}>ID:</label>
                <Field type="text" name="id" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Name:</label>
                <Field type="text" name="name" />
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Text:</label>
                <Field type="text" component="textarea" name="text" />
              </div>
            </div>
            <div style={css.horFormGroupContainer}>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Accept:</label>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Text:</label>
                  <Field type="text" name="acceptText" />
                </div>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Cards Added:</label>
                  <Field
                    name="acceptCardsAdded"
                    component={SelectField}
                    options={cardOptions}
                  />
                </div>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Cards Removed:</label>
                  <Field
                    name="acceptCardsRemoved"
                    component={SelectField}
                    options={cardOptions}
                  />
                </div>
                <div style={css.formElement}>{pillarAcceptConsequences}</div>
              </div>
              <div style={css.formGroupElement}>
                <label style={css.formLabel}>Reject:</label>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Text:</label>
                  <Field type="text" name="rejectText" />
                </div>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Cards Added:</label>
                  <Field
                    name="rejectCardsAdded"
                    component={SelectField}
                    options={cardOptions}
                  />
                </div>
                <div style={css.formElement}>
                  <label style={css.formLabel}>Cards Removed:</label>
                  <Field
                    name="rejectCardsRemoved"
                    component={SelectField}
                    options={cardOptions}
                  />
                </div>
                <div style={css.formElement}>{pillarRejectConsequences}</div>
              </div>
            </div>
            <button onClick={this.props.closeMenuDispatch}>Cancel</button>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }

  // private validate(values: any) {
  //   const errors: any = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   return errors;
  // }
}

export default MakerAddCardView;
