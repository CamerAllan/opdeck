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

    let initialValues: any[] | null = null;
    if (this.props.field.value) {
      initialValues = [];
      this.props.options.forEach((o: any) => {
        console.log(o);
        console.log(this.props.field);
        this.props.field.value.forEach((v: any) => {
          if (o.value === v.value) {
            initialValues!.push(v);
          }
        });
      });
    }

    return (
      <Select
        closeMenuOnSelect={false}
        isMulti={true}
        options={this.props.options}
        name={this.props.field.name}
        defaultValue={initialValues ? initialValues : ""}
        onChange={onChange}
        onBlur={this.props.field.onBlur}
      />
    );
  }
}

export default SelectField;
