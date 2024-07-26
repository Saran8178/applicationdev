import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-80">
        {/* Logo and Login Header */}
        <div className="flex items-center mb-8">
          <img
            alt="user logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4="
            className="w-8 h-8 mr-2"
          />
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        </div>

        {/* Form Section */}
        <form action="#" method="POST" className="w-full space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="abc@gmail.com"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent shadow-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm  text-black-50 font-medium"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="****"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent shadow-sm mt-2"
            />
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-2 px-4 font-semibold text-sm shadow-sm hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>


        <p className="mt-8 text-sm text-gray-500">
          Not a user?{" "}
          <Link
            to="/register" 
            className="font-semibold text-black"
          >
            Click to Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
