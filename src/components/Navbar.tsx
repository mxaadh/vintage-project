// import Link from "next/link";
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="bg-MutedSand hidden lg:block">
      <div className="container">
        <Menu
          as="div"
          className="flex w-fit gap-10 mx-auto font-medium py-6 text-gray-300"
        >
          <div>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/"
            >
              HOME
            </Link>
          </div>
          <b>
            <Dropdown />
          </b>
          {/* <b>
            <Link className="navbar__link relative" href="/creative">
              FURNITURE
            </Link>
          </b>
          <b>
            <Link className="navbar__link relative" href="/heritage">
              VEHICLE
            </Link>
          </b>
          <b>
            <Link className="navbar__link relative" href="/scrapyard">
              DECORATIVE
            </Link>
          </b> */}
          <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/creative"
            >
              CREATIVE
            </Link>
          </b>
          <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/heritage"
            >
              HERITAGE
            </Link>
          </b>
          <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/scrapyard"
            >
              SCRAPYARD
            </Link>
          </b>
          <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/blog"
            >
              BLOG
            </Link>
          </b>
          <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-AntiqueGold"
              href="/contact"
            >
              CONTACT US
            </Link>
          </b>
          {/* <b>
            <Link
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-CharcoalBlack shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              href="/offers"
            >
              HOT OFFERS
            </Link>
          </b> */}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
