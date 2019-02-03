import * as React from "react";
import { ICards, ICard, IPillars } from "../../store/store";
import { Formik, Form, Field } from "formik";
import SelectField from "../form/SelectField";
import * as css from "../../styles/formStyles";
import MakerEditPreviewView from "./MakerEditPreviewView";
import CardView from "../common/CardView";

interface IMakerAddCardStateProps {
  cardToEdit: string | null;
  cards: ICards;
  pillars: IPillars;
  addCardDispatch: (id: string, card: ICard) => void;
  deleteCardDispatch: (id: string) => void;
  closeMenuDispatch: () => void;
}

class MakerAddCardView extends React.Component<IMakerAddCardStateProps> {
  public render() {
    let initialValues = {};
    if (this.props.cardToEdit) {
      const card: ICard = this.props.cards[this.props.cardToEdit];
      const aa = card.contents.responses.accept.cardsAdded.map((c: string) => {
        return { value: c, label: c };
      });
      const ar = card.contents.responses.accept.cardsRemoved.map(
        (c: string) => {
          return { value: c, label: c };
        }
      );
      const ra = card.contents.responses.reject.cardsAdded.map((c: string) => {
        return { value: c, label: c };
      });
      const rr = card.contents.responses.reject.cardsRemoved.map(
        (c: string) => {
          return { value: c, label: c };
        }
      );

      initialValues = {
        id: this.props.cardToEdit,
        name: card.contents.name,
        text: card.contents.text,
        acceptText: card.contents.responses.accept.text,
        rejectText: card.contents.responses.reject.text,
        acceptCardsAdded: aa,
        acceptCardsRemoved: ar,
        rejectCardsAdded: ra,
        rejectCardsRemoved: rr
      };
    } else {
      initialValues = {
        id: "",
        name: "",
        text: "",
        acceptText: "",
        rejectText: ""
      };
    }

    const cardOptions: Array<{ label: string; value: string }> = [];
    Object.keys(this.props.cards).forEach((card: string) => {
      cardOptions.push({ label: card, value: card });
    });

    const pillarAcceptConsequences: JSX.Element[] = [];
    const pillarRejectConsequences: JSX.Element[] = [];
    Object.keys(this.props.pillars).forEach((pillar: string) => {
      let accept = 0;
      let reject = 0;
      if (this.props.cardToEdit) {
        const card: ICard = this.props.cards[this.props.cardToEdit];
        if (card.contents.responses.accept.effects[pillar]) {
          accept = card.contents.responses.accept.effects[pillar];
        }

        if (card.contents.responses.reject.effects[pillar]) {
          reject = card.contents.responses.reject.effects[pillar];
        }
      }

      initialValues[`acceptEffect${pillar}`] = accept;
      initialValues[`rejectEffect${pillar}`] = reject;

      pillarAcceptConsequences.push(
        <>
          <label style={css.formLabel}>{pillar} Effect:</label>
          <Field
            style={css.textElement}
            type="number"
            name={`acceptEffect${pillar}`}
          />
        </>
      );
      pillarRejectConsequences.push(
        <>
          <label style={css.formLabel}>{pillar} Effect:</label>
          <Field
            style={css.textElement}
            type="number"
            name={`rejectEffect${pillar}`}
          />
        </>
      );
    });

    const onSubmit = (values: any) => {
      const card: ICard = this.valuesToCard(values);

      this.props.addCardDispatch(values.id, card);
      this.props.closeMenuDispatch();
    };

    const renderForm = (props: any) => {
      return (
        <>
          <div style={css.formCont}>
            <Form>
              <div style={css.horFormGroupContainer}>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>ID:</label>
                  <Field style={css.textElement} type="text" name="id" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Name:</label>
                  <Field style={css.textElement} type="text" name="name" />
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Text:</label>
                  <Field
                    style={css.textAreaElement}
                    type="text"
                    component="textarea"
                    name="text"
                  />
                </div>
              </div>
              <div style={css.vertFormGroupContainer}>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Accept:</label>
                  <label style={css.formLabel}>Text:</label>
                  <Field
                    style={css.textElement}
                    type="text"
                    name="acceptText"
                  />
                  <div style={css.formGroupElement}>
                    <label style={css.formLabel}>Cards Added:</label>
                    <Field
                      style={css.textElement}
                      name="acceptCardsAdded"
                      component={SelectField}
                      options={cardOptions}
                    />
                  </div>
                  <div style={css.formGroupElement}>
                    <label style={css.formLabel}>Cards Removed:</label>
                    <Field
                      style={css.textElement}
                      name="acceptCardsRemoved"
                      component={SelectField}
                      options={cardOptions}
                    />
                  </div>
                  <div style={css.formElement}>{pillarAcceptConsequences}</div>
                </div>
                <div style={css.formGroupElement}>
                  <label style={css.formLabel}>Reject:</label>
                  <label style={css.formLabel}>Text:</label>
                  <Field
                    style={css.textElement}
                    type="text"
                    name="rejectText"
                  />
                  <div style={css.formGroupElement}>
                    <label style={css.formLabel}>Cards Added:</label>
                    <Field
                      style={css.textElement}
                      name="rejectCardsAdded"
                      component={SelectField}
                      options={cardOptions}
                    />
                  </div>
                  <div style={css.formGroupElement}>
                    <label style={css.formLabel}>Cards Removed:</label>
                    <Field
                      style={css.textElement}
                      name="rejectCardsRemoved"
                      component={SelectField}
                      options={cardOptions}
                    />
                  </div>
                  <div style={css.formElement}>{pillarRejectConsequences}</div>
                </div>
              </div>
            </Form>
          </div>

          <MakerEditPreviewView
            id={props.values.id}
            preview={
              <CardView
                id={props.values.id}
                card={this.valuesToCard(props.values)}
              />
            }
            closeMenuDispatch={this.props.closeMenuDispatch}
            deleteItem={this.props.deleteCardDispatch}
            submitForm={props.submitForm}
          />
        </>
      );
    };

    return (
      <Formik
        initialValues={initialValues}
        // validate={this.validate}
        onSubmit={onSubmit}
        render={renderForm}
      />
    );
  }

  private valuesToCard = (values: any) => {
    const acceptEffect = {};
    Object.keys(values).forEach((key: any) => {
      if (key.startsWith("acceptEffect")) {
        acceptEffect[key.replace("acceptEffect", "")] = values[key];
      }
    });

    const rejectEffect = {};
    Object.keys(values).forEach((key: any) => {
      if (key.startsWith("rejectEffect")) {
        rejectEffect[key.replace("rejectEffect", "")] = values[key];
      }
    });

    return {
      contents: {
        name: values.name,
        text: values.text,
        responses: {
          accept: {
            text: values.acceptText,
            cardsAdded: values.acceptCardsAdded ? values.acceptCardsAdded : [],
            cardsRemoved: values.acceptCardsRemoved
              ? values.acceptCardsRemoved
              : [],
            effects: acceptEffect
          },
          reject: {
            text: values.rejectText,
            cardsAdded: values.rejectCardsAdded ? values.rejectCardsAdded : [],
            cardsRemoved: values.rejectCardsRemoved
              ? values.rejectCardsRemoved
              : [],
            effects: rejectEffect
          }
        }
      },
      weightings: {}
    };
  };

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
