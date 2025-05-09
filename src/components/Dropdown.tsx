import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-AntiqueGold">
          CATEGORY
          {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" /> */}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href="/furniture"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:outline-none hover:bg-AntiqueGold hover:text-WarmWhite"
            >
              FURNITURE
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/vehicle"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:outline-none hover:bg-AntiqueGold hover:text-WarmWhite"
            >
              VEHICLE
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/decorative"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:outline-none hover:bg-AntiqueGold hover:text-WarmWhite"
            >
              DECORATIVE
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
