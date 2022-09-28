import React from "react";
import { withFormik } from "formik";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

function callloginapi(values) {
  console.log("sending data", values.email, values.password);
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5, "Too Short").required(),
});

const initialValues = { email: "", password: "" };

function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  resetForm,
}) {
  return (
    <>
      <Link to="/LoginPage"></Link>
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="flex items-center justify-center p-10 bg-blue-200 border-4 border-blue-300 rounded-md">
          <form
            className="flex flex-col items-center justify-center gap-5 p-5 bg-blue-300 border-4 border-blue-300 rounded-md"
            onSubmit={handleSubmit}
          >
            <FiLogIn className="text-6xl font-black text-black" />
            <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
              Login
            </h1>
            <Input
              values={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="email"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="email"
            />
            <Input
              values={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="password"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="px-6 py-0 bg-blue-700 rounded-md disabled:bg-gray-200"
                  // disabled={!dirty || !isValid}
                >
                  Login
                </button>

                <Link to="/Forgot" className="text-xs">
                  Forgot Password
                </Link>
              </div>
              <Link to="/SignUp">SignUp</Link>

              {/* <div className="flex items-end justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-0 text-xs bg-red-500 rounded-md"
                  >
                    Reset
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
                </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callloginapi,
});
const EasyLogin = myHOC(Login);
export default EasyLogin;
