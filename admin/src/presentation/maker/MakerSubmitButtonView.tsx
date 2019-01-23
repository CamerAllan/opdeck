import * as React from "react";
import { ICard, IPillar } from "../../store/store";

interface IMakerSubmitButtonStateProps {
  id: string;
  card: ICard | IPillar;
  submitButtonDispatch: (id: string, toSubmit: ICard | IPillar) => void;
}

class MakerSubmitButtonView extends React.Component<
  IMakerSubmitButtonStateProps
> {
  public render() {
    const submit = () =>
      this.props.submitButtonDispatch(this.props.id, this.props.card);

    return (
      <div>
        <button onClick={submit}>Cancel</button>
      </div>
    );
  }
}

export default MakerSubmitButtonView;
