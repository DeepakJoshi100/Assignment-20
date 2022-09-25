import { useField } from "formik";
import Input from "./Input";
import React from "react";
function FormikInput({ name, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  return (
    <>
      <Input
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        error={error}
        value={value}
        {...rest}
      />
    </>
  );
}
export default FormikInput;
