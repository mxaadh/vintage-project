import React from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";
import { IProductResponse } from "@/types";

type ListTitleProps = {
  title: string;
};

const ListTitle = ({ title }: ListTitleProps) => {
  return (
    <div>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-center">
            <div className="text-center text-[#3a3a3a] text-[40px] font-bold font-['Poppins'] leading-[48px]">
              {title ? title : "Our New Products"}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

type NewProductsProps = {
  title: string;
  products: IProductResponse;
};

const NewProducts = ({ title, products }: NewProductsProps) => {
  return (
    <section className="bg-WarmWhite">
      <div
        className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 $`}
      >
        {title && <ListTitle title={title} />}

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products?.data?.map((product) => {
            return (
              <li key={product._id + Math.random()}>
                <ProductItem product={product} />
              </li>
            );
          })}
        </ul>
        <div className="relative w-10 h-12 mt-8  ml-[480px]">
          <Link
            href={`/${title.charAt(0).toLowerCase() + title.slice(1)}`}
            className="w-[245px] h-12 left-0 top-0 absolute bg-WarmWhite border border-AntiqueGold"
          >
            <div className="left-[82px] top-[12px] absolute text-AntiqueGold text-base font-semibold font-['Poppins'] leading-normal">
              Show More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
