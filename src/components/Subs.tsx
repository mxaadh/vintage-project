import React from "react";
import Button from "./Button";
import Image from "next/image";

const Subs = () => {
  return (
    <section className="overflow-hidden bg-[#fbf7f2] sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Make Your Home Unique
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Discover one-of-a-kind vintage pieces that tell a story and bring
            authenticity to your space.
          </p>

          <div className="flex justify-center mt-8">
            <Button name="Browse Vintage Finds" />
          </div>
        </div>
      </div>

      <Image
        alt=""
        src="/assets/images/banner/b13.jpeg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        width={100}
        height={100}
      />
    </section>
  );
};

export default Subs;
