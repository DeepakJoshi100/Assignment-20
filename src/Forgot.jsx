import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useFormik } from "formik";
import * as Yup from "yup";

function Forgot() {
  function callloginapiforgot(values) {
    console.log("sending data", "1", values.email, "2", values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5, "Too Short").required(),
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callloginapiforgot,
    validationSchema: schema,
  });

  return (
    <>
      <Link to="/Forgot"></Link>
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="flex items-center justify-center p-10 bg-blue-200 border-4 border-blue-300 rounded-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-5 p-10 bg-blue-300 border-4 border-blue-300 rounded-md"
          >
            <VscAccount className="text-6xl font-black text-black" />
            <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
              Forgot
            </h1>
            <div className="flex flex-col">
              <input
                value={values.email}
                id="email"
                type="email"
                name="email"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="text-xs font-black text-red-500">
                  {errors.email}
                </div>
              )}
              <input
                value={values.password}
                id="password"
                type="password"
                name="password"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="text-xs font-black text-red-500">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="px-6 py-0 mx-auto bg-blue-700 rounded-md disabled:bg-gray-200"
                  disabled={!dirty || !isValid}
                >
                  Get OTP
                </button>
              </div>
              <button
                type="button"
                className="flex items-end justify-end text-xs"
              >
                Don't have an account ?
                <Link
                  to="/SignUp"
                  className="text-sm font-black text-red-400 underline"
                >
                  SignUp
                </Link>
              </button>
              <Link
                to="/LoginPage"
                className="flex items-end justify-end text-xs font-bold text-gray-400"
              >
                Back To Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Forgot;
