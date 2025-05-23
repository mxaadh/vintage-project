"use client";

import Link from "next/link";
import { loginUser } from "@/lib/api/auth";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const data = await loginUser({ email, password });

      console.log("asdf Logged in user:", data.user);
      console.log("asdf Token:", data.token);
      setLoading(false);
      // You can redirect or save token here
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center relative bg-[url(/assets/images/banner/B10.jpg)]">
      <div className="absolute bg-gradient-to-b from-Terracotta/50 to-CoffeeBrown/50 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome Back</h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>

        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-MutedSand mx-auto rounded-2xl w-100">
            <div className="mb-4">
              <h3 className="font-bold text-3xl text-slate-950 text-center">
                Sign In
              </h3>
            </div>

            <div className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                  placeholder="mail@gmail.com"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="text-Terracotta hover:text-AntiqueGold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className={`w-full flex justify-center bg-Terracotta hover:bg-AntiqueGold text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500
    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </div>

            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Not registered?{" "}
                <Link
                  href="/signup"
                  className="text-green text-Terracotta hover:text-AntiqueGold"
                >
                  Create an account.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
