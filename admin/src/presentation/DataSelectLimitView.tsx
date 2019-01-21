import * as React from "react";
import * as css from "src/styles/dataSelectStyles";
import Select from "react-select";
import { IPillar } from "../store/store"

interface IDataSelectLimitStateProps {
    pillarName: string;
    pillar: IPillar;
    filter: (pillar: string, value: number, moreThan: boolean) => void;
}

class DataSelectLimitView extends React.Component<IDataSelectLimitStateProps> {
    public render() {
        const filters = []
        const options: Array<{ value: number; label: number }> = [];

        for (let i = this.props.pillar.min; i < this.props.pillar.max + 1; i++) {
            options.push({ value: i, label: i });
        }

        filters.push(
            <div>
                <div>
                    {this.props.pillarName}
                </div>
                <div style={css.limitCont}>
                    <div style={css.limit}>
                        <Select
                            defaultValue={{ label: this.props.pillar.min, value: this.props.pillar.min }}
                            onChange={this.handlePillarChangeLess}
                            options={options}
                        />
                    </div>
                    <div style={css.limit}>
                        <Select
                            defaultValue={{ label: this.props.pillar.max, value: this.props.pillar.max }}
                            onChange={this.handlePillarChangeMore}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        );

        return (filters);
    }

    private handlePillarChangeLess = (choice: any) =>
        this.props.filter(this.props.pillarName, choice.value, false)
    private handlePillarChangeMore = (choice: any) =>
        this.props.filter(this.props.pillarName, choice.value, true)
}




export default DataSelectLimitView;
