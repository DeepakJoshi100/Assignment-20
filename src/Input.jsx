import React from "react";
function Input({ label, id, name, className, touched, error, ...rest }) {
  let borderClass = "";
  if (error && touched) {
    borderClass = "border-red-500 focus:text-red-500 focus:border-red-400 ";
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
          {...rest}
          className={
            "rounded-md px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600 " +
            borderClass +
            className
          }
        />
        {touched && error && (
          <div className="text-xs font-black text-red-500">{error}</div>
        )}
      </div>
    </>
  );
}
export default Input;
