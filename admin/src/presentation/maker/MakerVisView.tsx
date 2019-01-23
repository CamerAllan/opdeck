import * as React from "react";
import { ICards, ISelectedData, IPillars } from "../../store/store";

interface IMakerVisStateProps {
    cards: ICards;
    pillars: IPillars;
    selectedData: ISelectedData;
}

class MakerVisView extends React.Component<IMakerVisStateProps> {
    public render() {
        return (
            <div>
                yotteem
      </div>
        );
    }
}

export default MakerVisView;
