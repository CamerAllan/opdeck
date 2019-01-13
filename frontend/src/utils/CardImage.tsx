import * as React from "react";
import Advisor from '../images/advisor';
import Money from '../images/money';
import Science from '../images/science';
import Army from '../images/army';

export interface ICardImageProps {
    name: string,
    fill: string,
    height: string,
    width: string,
    style: {}
}

const CardImage = (props: ICardImageProps) => {
    switch (props.name) {
        case "Money":
            return <Money {...props} />;
        case "Popularity":
            return <Advisor {...props} />;
        case "Science":
            return <Science {...props} />;
        case "Army":
            return <Army {...props} />;
        default:
            return <div />;
    }
}
export default CardImage;