"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api/auth";
import { IUserResponse, RegisterPayload } from "@/types/user";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
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
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload: RegisterPayload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        dob: formData.dob,
        gender: formData.gender,
      };

      const data: IUserResponse = await registerUser(payload);

      // Registration successful - redirect to login with success state
      // Save token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/login");
    } catch (error: unknown) {
      console.error("Registration error:", error);

      let errorMessage = "Registration failed. Please try again.";

      if (error instanceof Error) {
        // Handle API error responses
        try {
          // Try to parse the error message in case it's JSON
          const errorObj = JSON.parse(error.message);
          errorMessage = errorObj.message || errorMessage;
        } catch {
          // If not JSON, use the raw message
          errorMessage = error.message || errorMessage;
        }
      }

      setErrors({
        ...errors,
        apiError: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... [rest of your JSX remains exactly the same as in your original component]
  // Only the form submission logic has changed

  return (
    <div className="bg-no-repeat bg-cover bg-center relative bg-[url(/assets/images/banner/B10.jpg)]">
      <div className="absolute bg-gradient-to-b from-Terracotta/50 to-CoffeeBrown/50 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="mb-3 font-bold text-5xl">Hi! Welcome</h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-MutedSand mx-auto rounded-2xl w-100">
            <div className="mb-4">
              <h3 className="font-bold text-3xl text-slate-950 text-center">
                Sign Up
              </h3>
            </div>
            {errors.apiError && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {errors.apiError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 pr-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      First Name
                    </label>
                    <input
                      className={`w-full text-base px-4 py-2 border rounded-lg focus:outline-none ${
                        errors.first_name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-AntiqueGold"
                      }`}
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2 pl-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Last Name
                  </label>
                  <input
                    className={`w-full text-base px-4 py-2 border rounded-lg focus:outline-none ${
                      errors.last_name
                        ? "border-red-500"
                        : "border-gray-300 focus:border-AntiqueGold"
                    }`}
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs">{errors.last_name}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className={`w-full text-base px-4 py-2 border rounded-lg focus:outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-AntiqueGold"
                  }`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mail@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className={`w-full content-center text-base px-4 py-2 border rounded-lg focus:outline-none ${
                      errors.password
                        ? "border-red-500"
                        : "border-gray-300 focus:border-AntiqueGold"
                    }`}
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Confirm Password
                  </label>
                  <input
                    className={`w-full content-center text-base px-4 py-2 border rounded-lg focus:outline-none ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300 focus:border-AntiqueGold"
                    }`}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Date of Birth
                  </label>
                  <input
                    className={`w-full content-center text-base px-4 py-2 border rounded-lg focus:outline-none ${
                      errors.dob
                        ? "border-red-500"
                        : "border-gray-300 focus:border-AntiqueGold"
                    }`}
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-xs">{errors.dob}</p>
                  )}
                </div>
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Gender
                  </label>
                  <select
                    className={`w-full content-center text-base px-4 py-3 border rounded-lg focus:outline-none ${
                      errors.gender
                        ? "border-red-500"
                        : "border-gray-300 focus:border-AntiqueGold"
                    }`}
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-xs">{errors.gender}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 focus:ring-blue-400 border rounded ${
                      errors.acceptTerms ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <label className="ml-2 block text-sm text-gray-800">
                    I accept the Terms and Conditions
                  </label>
                </div>
              </div>
              {errors.acceptTerms && (
                <p className="text-red-500 text-xs">{errors.acceptTerms}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center ${
                    isSubmitting
                      ? "bg-AntiqueGold"
                      : "bg-Terracotta hover:bg-AntiqueGold"
                  } text-MutedSand p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500`}
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-Terracotta hover:text-AntiqueGold"
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
