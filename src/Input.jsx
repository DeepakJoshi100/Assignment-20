import autoprefixer from "autoprefixer";
import { useField } from "formik";
import React from "react";
function Input({ label, id, name, className, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  let borderClass = "";
  if (error && touched) {
    borderClass = "border-red-400 focus:text-red-500 focus:border-red-400 ";
  }

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
          className={
            "rounded-md px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600 " +
            className +
            " " +
            borderClass
          }
        />
        {touched && error && (
          <div className="text-red-500 text-xs font-black">{error}</div>
        )}{" "}
      </div>
    </>
  );
}
export default Input;
