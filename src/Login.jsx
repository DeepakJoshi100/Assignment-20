import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      {" "}
      <Link to="/LoginPage"></Link>
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="flex items-center justify-center p-10 bg-blue-200 border-4 border-blue-300 rounded-md">
          <form className="flex flex-col items-center justify-center gap-5 p-10 bg-blue-300 border-4 border-blue-300 rounded-md">
            <FiLogIn className="text-6xl font-black text-black" />
            <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
              Login
            </h1>
            <div className="flex flex-col">
              <input
                id="E-mail"
                name="E-mail"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="E-mail"
              />
              <input
                id="Password"
                name="Password"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <button className="px-6 py-0 bg-blue-700 rounded-md">
                  Login
                </button>
                <Link to="/Forgot" className="text-xs">
                  Forgot Password
                </Link>
              </div>
              <button className="flex items-end justify-end text-xs">
                Don't have an account ?
                <Link
                  to="/SignUp"
                  className="text-sm font-black text-red-400 underline"
                >
                  SignUp
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
