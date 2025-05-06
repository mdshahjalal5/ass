import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Account
        </h2>

        {/* Optional Error Message */}
        <div className="alert alert-error mb-4 hidden">
          <span>All fields are required.</span>
        </div>

        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-info w-full mt-2"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-info w-full mt-2"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-info w-full mt-2"
              placeholder="Enter a strong password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Photo Url
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input input-info w-full mt-2"
              placeholder="Enter your photo url"
              required
            />
          </div>

          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="checkbox checkbox-primary"
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Accept our{" "}
                <Link className="underline" to="/terms">
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>
          {/* Submit Button */}

          <button
            type="submit"
            className="btn btn-primary w-full py-2 text-white"
          >
            Register
          </button>
        </form>
        <button className="btn btn-primary w-full py-2 text-white mt-3">
          Sign up with Google
        </button>

        {/* Already have an account */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
