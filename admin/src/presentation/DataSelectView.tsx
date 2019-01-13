import * as React from "react";
// import * as css from "src/styles/TopLevelStyles";

interface IDataSelectStateProps {
    data: any;
    selectedData: any;
    cardStats: any;
}

class DataSelectView extends React.Component<IDataSelectStateProps> {
    public render() {
        const cardList: any = [];
        this.props.cardStats.forEach((card: any) => {
            console.log(card);
            cardList.push(<div>{card.id}</div>);
        });
        return (cardList);
    }
}

export default DataSelectView;
