import { FormInputLabel, Group, Input } from "./form-input.styles";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
