import * as React from "react";
import SelectView from "../../presentation/common/SelectView";
import { ThunkDispatch } from "redux-thunk";
import { IStore, IPillars, ICards } from "../../store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { selectCards, filterPillars } from "../../actions/actions";

interface ISelectStateProps {
    cards: ICards;
    selectedCards: string[];
    pillars: IPillars;
}

interface ISelectDispatchProps {
    selectItemsDispatch: (
        ids: string[],
        action: (ids: string[]) => AnyAction
    ) => void;
    updateFilterDispatch: (
        pillar: string,
        value: number,
        moreThan: boolean
    ) => void;
}

type ISelectProps = ISelectStateProps & ISelectDispatchProps;

class Select extends React.Component<ISelectProps> {
    constructor(props: ISelectProps) {
        super(props);
    }

    public render() {
        return (
            <SelectView
                pillars={this.props.pillars}
                selectableCards={this.getSelectableCards(this.props.cards, this.props.selectedCards)}
                selectActions={{
                    card: { select: this.selectCard },
                    filter: { updateFilter: this.props.updateFilterDispatch }
                }}
            />
        );
    }

    private getSelectableCards(cards: ICards, selectedCards: string[]) {
        console.log(selectedCards);
        const selectable = [];
        for (const key in cards) {
            if (selectedCards.indexOf(key) === -1) {
                selectable.push({ value: key, label: key });
            }
        }
        return selectable;
    }

    private selectCard = (ids: string[]) => {
        this.props.selectItemsDispatch(ids, selectCards);
    };
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
    selectItemsDispatch: (ids: string[], action: (ids: string[]) => AnyAction) =>
        dispatch(action(ids)),
    updateFilterDispatch: (pillar: string, value: number, moreThan: boolean) => {
        const comparator = moreThan ? "moreThan" : "lessThan";
        return dispatch(filterPillars({ [pillar]: { [comparator]: value } }));
    }
});

export default connect<ISelectStateProps, ISelectDispatchProps>(
    null,
    mapDispatchToProps
)(Select);
