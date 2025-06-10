import React from "react";
import { FaUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import Logo from "./Logo";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { CircleUser, CirclePlus } from "lucide-react";

const HeaderMain = () => {
  const { user, auth, logout } = useAuth();

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
          {auth ? (
            <div className="flex justify-between items-center gap-4">
              <p className="flex justify-between items-center gap-1 font-semibold text-lg">
                {JSON.parse(user)?.first_name}
                {(JSON.parse(user)?.isAdmin === true) && (
                  <i className="font-semibold text-xs">(Admin)</i>
                )}
              </p>
              <button onClick={logout}>
                <TbLogout />
              </button>
              {(JSON.parse(user)?.isAdmin === true) ? (
                <Link href={"/admin"}>
                  <CircleUser />
                </Link>
              ) : (
                <Link href={"/add-product"}>
                  <CirclePlus />
                </Link>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="hover:text-MutedSand">
                <FaUser />
              </Link>
            </>
          )}

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
