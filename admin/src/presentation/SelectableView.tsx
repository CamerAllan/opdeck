import * as React from "react";
import * as css from "src/styles/dataSelectStyles";

interface ISelectableStateProps {
    id: string;
    selected: boolean;
    select: (id: string) => void;
    deselect: (id: string) => void;
}

class SelectableView extends React.Component<ISelectableStateProps> {

    public render() {
        return (<div
            style={this.props.selected ? { color: "green" } : css.selectable}
            onClick={this.onClick}>
            {this.props.id}
            {this.props.selected}
        </div >);
    }

    private onClick = () => {
        this.props.selected ? this.props.deselect(this.props.id) : this.props.select(this.props.id);
    }
}

export default SelectableView;