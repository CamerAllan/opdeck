import * as React from "react";
import { ICards, ICard, IPillars } from "../../store/store";
import { Formik, Form, Field } from "formik";
import SelectField from "../form/SelectField";

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
        <Field type="number" name={`accept${pillar}effect`} />
      );
      pillarRejectConsequences.push(
        <Field type="number" name={`reject${pillar}effect`} />
      );
    });

    const onSubmit = (values: any) => {
      const card: ICard = {
        contents: {
          name: values.name,
          text: values.text,
          responses: {
            accept: {
              text: values.acceptText,
              cardsAdded: [],
              cardsRemoved: [],
              effects: {}
            },
            reject: {
              text: values.rejectText,
              cardsAdded: [],
              cardsRemoved: [],
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
            id:
            <Field type="text" name="id" />
            Name:
            <Field type="text" name="name" />
            Text:
            <Field type="text" name="text" />
            <div>
              Accept:
              <Field type="text" name="acceptText" />
              <Field
                name="cardsAdded"
                component={SelectField}
                options={cardOptions}
              />
              {pillarAcceptConsequences}
            </div>
            <div>
              Reject:
              <Field type="text" name="rejectText" />
              <Field
                name="cardsRemoved"
                component={SelectField}
                options={cardOptions}
              />
              {pillarRejectConsequences}
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
