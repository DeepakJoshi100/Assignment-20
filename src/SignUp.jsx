import React from "react";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "./FormikInput";

function SignUp() {
  function callAPIforSignup(values) {
    console.log(
      "sending Signup Data",
      "1",
      values.firstname,
      "2",
      values.secondname,
      "3",
      values.address,
      "4",
      values.landmark,
      "5",
      values.mobile,
      "6",
      values.alternate,
      "7",
      values.gmail,
      "8",
      values.username,
      "9",
      values.password,
      "10",
      values.confirm
    );
  }

  const schema = Yup.object().shape({
    firstname: Yup.string().min(2).required(),
    secondname: Yup.string().min(2).required(),
    address: Yup.string().required(),
    landmark: Yup.string().notRequired(),
    mobile: Yup.string().min(10).max(13).required(),
    alternate: Yup.string().min(10).max(13).notRequired(),
    gmail: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().min(5).required(),
    confirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Your passwords do not match."),
  });

  const initialValues = {
    firstname: "",
    secondname: "",
    address: "",
    landmark: "",
    mobile: "",
    alternate: "",
    gmail: "",
    username: "",
    password: "",
    confirm: "",
  };
  return (
    <>
      <Link to="/SignUp"></Link>
      <Formik
        initialValues={initialValues}
        onSubmit={callAPIforSignup}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100">
          <SiGnuprivacyguard className="text-6xl font-black text-black" />
          <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
            SignUp
          </h1>
          <div className="flex gap-1">
            <div className="flex flex-col">
              <FormikInput
                id="firstname"
                name="firstname"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="First-Name"
              />
            </div>
            <div className="flex flex-col">
              <FormikInput
                id="secondname"
                name="secondname"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Second-Name"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col">
              <FormikInput
                id="address"
                name="address"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Address"
              />
            </div>
            <div className="flex flex-col">
              <FormikInput
                id="landmark"
                name="landmark"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Landmark"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col">
              <FormikInput
                id="mobile"
                name="mobile"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Mobile number"
              />
            </div>
            <div className="flex flex-col">
              <FormikInput
                id="alternate"
                name="alternate"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Alternate Number"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col">
              <FormikInput
                id="gmail"
                name="gmail"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Gmail"
              />
            </div>
            <div className="flex flex-col">
              <FormikInput
                id="username"
                name="username"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="UserName"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col">
              <FormikInput
                id="password"
                name="password"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col">
              <FormikInput
                id="confirm"
                name="confirm"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-0 mx-auto bg-blue-700 rounded-md disabled:bg-gray-300"
                // disabled={!dirty || !isValid}
              >
                SignUp
              </button>
              <Link to="/LoginPage">Login</Link>
              {/* <button
                type="button"
                onClick={resetForm}
                className="px-6 py-0 text-xs bg-red-500 rounded-md"
              >
                Reset
              </button> */}
            </div>
            {/* <button
              type="button"
              className="flex items-end justify-end text-xs"
            >
              Have an account ?
              <Link
                to="/LoginPage"
                className="text-sm font-black text-red-400 underline"
              >
                Login
              </Link>
            </button> */}
          </div>
        </Form>
      </Formik>
    </>
  );
}
export default SignUp;
