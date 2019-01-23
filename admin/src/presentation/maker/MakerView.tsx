import * as React from "react";
import Select from "../../containers/common/Select";
import MakerVis from "../../containers/maker/MakerVis";
import * as css from "../../styles/adminStyles";
import { ISelectedData, ICards, IPillars } from "../../store/store";

interface IMakerStateProps {
    selectedData: ISelectedData;
    cards: ICards;
    pillars: IPillars;
}

class MakerView extends React.Component<IMakerStateProps> {
    public render() {
        return (
            <div style={css.adminTopLevel}>
                <div style={css.adminSelectCont}>
                    <Select selectedCards={this.props.selectedData.cards} pillars={this.props.pillars} cards={this.props.cards} />
                </div>
                <div style={css.adminVisCont}>
                    <MakerVis {...this.props} />
                </div>
            </div>);
    }
}

export default MakerView;
