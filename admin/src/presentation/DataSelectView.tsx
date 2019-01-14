import * as React from "react";
import * as css from "src/styles/dataSelectStyles";
import { ISelectedData } from "src/store/store";
import SelectableView from "./SelectableView";

interface IDataSelectStateProps {
    data: any;
    selectedData: ISelectedData;
    cardStats: any;
    selectActions: {
        card: {
            select: (id: string) => void,
            deselect: (id: string) => void
        }
    }
}

class DataSelectView extends React.Component<IDataSelectStateProps> {

    public render() {
        const cardList: any = [];
        this.props.cardStats.forEach((card: any) => {
            const selected: boolean = this.props.selectedData.cards.indexOf(card.id) > -1;
            cardList.push(<SelectableView
                id={card.id}
                selected={selected}
                select={this.props.selectActions.card.select}
                deselect={this.props.selectActions.card.deselect} />);
        });
        return (
            <div style={css.selectMenu}>
                <div style={css.selectCont}>
                    {cardList}
                </div>
            </div>
        );
    }
}

export default DataSelectView;