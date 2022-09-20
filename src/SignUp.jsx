import React from "react";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
function SignUp() {
  return (
    <>
      <Link to="/SignUp"></Link>
      <form className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100">
        <SiGnuprivacyguard className="text-6xl font-black text-black" />
        <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
          SignUp
        </h1>
        <div className="flex gap-1">
          <input
            id="FirstName"
            name="FirstName"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="First-Name"
          />
          <input
            id="SecondName"
            name="SecondName"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Second-Name"
          />
        </div>
        <div className="flex gap-1">
          <input
            id="Address"
            name="Address"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Address"
          />
          <input
            id="Landmark"
            name="Landmark"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Landmark"
          />
        </div>
        <div className="flex gap-1">
          <input
            id="Mobile"
            name="Mobile"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Mobile number"
          />
          <input
            id="Alternate"
            name="Alternate"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Alternate Number"
          />
        </div>
        <div className="flex gap-1">
          <input
            id="Gmail"
            name="Gmail"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Gmail"
          />
          <input
            id="Username"
            name="Username"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="UserName"
          />
        </div>
        <div className="flex gap-1">
          <input
            id="password"
            name="password"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Password"
          />
          <input
            id="confirm"
            name="confirm"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Confirm Password"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <button className="px-6 py-0 mx-auto bg-blue-700 rounded-md">
            SignUp
          </button>
          <button className="flex items-end justify-end text-xs">
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
