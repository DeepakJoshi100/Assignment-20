import React from "react";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
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
    },
    onSubmit: callAPIforSignup,
    validationSchema: schema,
  });

  return (
    <>
      <Link to="/SignUp"></Link>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100"
      >
        <SiGnuprivacyguard className="text-6xl font-black text-black" />
        <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
          SignUp
        </h1>
        <div className="flex gap-1">
          <input
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            id="firstname"
            name="firstname"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="First-Name"
          />
          {touched.firstname && errors.firstname && (
            <div className="text-xs font-black text-red-500">
              {errors.firstname}
            </div>
          )}
          <input
            value={values.secondname}
            onChange={handleChange}
            onBlur={handleBlur}
            id="secondname"
            name="secondname"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Second-Name"
          />
          {touched.secondname && errors.secondname && (
            <div className="text-xs font-black text-red-500">
              {errors.secondname}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <input
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            id="address"
            name="address"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Address"
          />
          {touched.address && errors.address && (
            <div className="text-xs font-black text-red-500">
              {errors.address}
            </div>
          )}
          <input
            value={values.landmark}
            onChange={handleChange}
            onBlur={handleBlur}
            id="landmark"
            name="landmark"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Landmark"
          />
          {touched.landmark && errors.landmark && (
            <div className="text-xs font-black text-red-500">
              {errors.landmark}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <input
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            id="mobile"
            name="mobile"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Mobile number"
          />
          {touched.mobile && errors.mobile && (
            <div className="text-xs font-black text-red-500">
              {errors.mobile}
            </div>
          )}
          <input
            value={values.alternate}
            onChange={handleChange}
            onBlur={handleBlur}
            id="alternate"
            name="alternate"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Alternate Number"
          />
          {touched.alternate && errors.alternate && (
            <div className="text-xs font-black text-red-500">
              {errors.alternate}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <input
            value={values.gmail}
            onChange={handleChange}
            onBlur={handleBlur}
            id="gmail"
            name="gmail"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Gmail"
          />
          {touched.gmail && errors.gmail && (
            <div className="text-xs font-black text-red-500">
              {errors.gmail}
            </div>
          )}
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            id="username"
            name="username"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="UserName"
          />
          {touched.username && errors.username && (
            <div className="text-xs font-black text-red-500">
              {errors.username}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <div className="text-xs font-black text-red-500">
              {errors.password}
            </div>
          )}
          <input
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirm"
            name="confirm"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Confirm Password"
          />
          {touched.confirm && errors.confirm && (
            <div className="text-xs font-black text-red-500">
              {errors.confirm}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-0 mx-auto bg-blue-700 rounded-md disabled:bg-gray-300"
              disabled={!dirty || !isValid}
            >
              SignUp
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-0 text-xs bg-red-500 rounded-md"
            >
              Reset
            </button>
          </div>
          <button type="button" className="flex items-end justify-end text-xs">
            Have an account ?
            <Link
              to="/LoginPage"
              className="text-sm font-black text-red-400 underline"
            >
              Login
            </Link>
          </button>
        </div>
      </form>
    </>
  );
}
export default SignUp;
