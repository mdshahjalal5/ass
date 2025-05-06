import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login
        </h2>

        {/* Error message (optional, can be toggled based on form validation) */}
        <div className="alert alert-error mb-4 hidden">
          <span>Please fill in both fields.</span>
        </div>

        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-accent w-full mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-accent w-full mt-2"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full py-2 text-white"
          >
            Log In
          </button>
        </form>
        <button className="btn btn-primary w-full py-2 text-white mt-3">
          Sign up with Google
        </button>

        {/* Sign Up Link */}
        <div className="mt-4 flex justify-between">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to="/auth/forgot-password" className="text-primary">
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
