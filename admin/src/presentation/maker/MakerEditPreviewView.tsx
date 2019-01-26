import * as React from "react";
import * as css from "../../styles/formStyles";
import * as makerCSS from "../../styles/maker/makerVisStyles";

interface IMakerEditPreviewStateProps {
  id: string | null;
  preview: any;
  submitForm: () => void;
  closeMenuDispatch: () => void;
}

class MakerEditPreviewView extends React.Component<
  IMakerEditPreviewStateProps
> {
  public render() {
    return (
      <div style={makerCSS.previewCont}>
        <div style={makerCSS.preview}>{this.props.preview}</div>
        <button style={css.formButton} onClick={this.props.closeMenuDispatch}>
          Cancel
        </button>
        <button
          style={css.formButton}
          onClick={this.props.submitForm}
          type="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default MakerEditPreviewView;
