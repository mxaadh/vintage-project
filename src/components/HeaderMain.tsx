import React from "react";
import { FaUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import Logo from "./Logo";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <div className="bg-Terracotta border-b border-Terracotta bg-gradient-to-b from-MutedSand/30 to-Terracotta/25 py-4">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Logo width={70} height={70} />
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            type="text"
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute top-0 right-0 mr-2 mt-2 text-slate-950"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-WarmWhite text-[30px]">
          <Link href="/login" className="hover:text-MutedSand">
            <FaUser />
          </Link>
          {/* <div className="relative">
            <FaHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div> */}

          <div className="relative">
            <Link href="/cart" className="hover:text-MutedSand">
              <FaBagShopping />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
