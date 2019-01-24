import * as React from "react";
import Select from "react-select";

interface ISelectFieldStateProps {
  options: any;
  field: any;
  form: any;
}

class SelectField extends React.Component<ISelectFieldStateProps> {
  public render() {
    const onChange = (options: any) => {
      this.props.form.setFieldValue(
        this.props.field.name,
        options.map((option: { label: string; value: string }) => option.label)
      );
    };

    const find = (option: any) => option.value === this.props.field.value;

    return (
      <Select
        isMulti={true}
        options={this.props.options}
        name={this.props.field.name}
        value={this.props.options ? this.props.options.find(find) : ""}
        onChange={onChange}
        onBlur={this.props.field.onBlur}
      />
    );
  }
}

export default SelectField;
