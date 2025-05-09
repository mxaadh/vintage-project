import Link from "next/link";

const SignupForm = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative bg-[url(http://localhost:3000/assets/images/banner/B10.jpg)]">
      <div className="absolute bg-gradient-to-b from-Terracotta/50 to-CoffeeBrown/50 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            {/* <img src="" className="mb-3"> */}
            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-MutedSand mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-bold text-3xl text-slate-950 text-center">
                Sign Up{" "}
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 pr-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      First Name
                    </label>
                    <input
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                      type=""
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="space-y-2 pl-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Last Name
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                    type=""
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                  type=""
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div className="space-y-2  w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Confirm Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                    type=""
                    placeholder="Enter your Confirm password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2 w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Date of Birth
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold"
                    type="date"
                    placeholder="Enter your Date of Birth"
                  />
                </div>
                <div className="space-y-2  w-[300px]">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Gender
                  </label>
                  <select className="w-full content-center text-base px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-AntiqueGold">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-800">
                    I accept theTerms and Conditions
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-Terracotta  hover:bg-AntiqueGold text-MutedSand p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
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
