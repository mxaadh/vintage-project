"use client";

import Link from "next/link";
import { loginUser } from "@/lib/api/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      const { user, token } = data;
      login(user, token);

      if (user.isAdmin) {
        router.push("/admin");
      } else {
        router.back();
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      let errorMessage = "Login failed. Please try again.";

      if (error instanceof Error) {
        try {
          const errorObj = JSON.parse(error.message);
          errorMessage = errorObj.message || errorMessage;
        } catch {
          errorMessage = error.message || errorMessage;
        }
      }

      setApiError(errorMessage);
    } finally {
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

            {apiError && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {apiError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-base px-4 py-2 border rounded-lg focus:outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-AntiqueGold"
                  }`}
                  placeholder="mail@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full content-center text-base px-4 py-2 border rounded-lg focus:outline-none ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-300 focus:border-AntiqueGold"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-Terracotta hover:text-AntiqueGold"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center ${
                    loading
                      ? "bg-AntiqueGold"
                      : "bg-Terracotta hover:bg-AntiqueGold"
                  } text-MutedSand p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500`}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Not registered?{" "}
                <Link
                  href="/signup"
                  className="text-Terracotta hover:text-AntiqueGold"
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
