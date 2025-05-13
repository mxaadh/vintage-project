"use client";

import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Subs from "@/components/Subs";
import Testimonial from "@/components/Testimonial";
import { getAllProducts } from "@/lib/api/product";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const cproducts = [
  {
    id: 1,
    title: "Product 1",
    price: "PRICE 100",
    image: "/assets/images/creative/P11.webp",
  },
  {
    id: 2,
    title: "Product 2",
    price: "PRICE 100",
    image: "/assets/images/creative/P14.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: "PRICE 100",
    image: "/assets/images/creative/P10.jpeg",
  },
  {
    id: 4,
    title: "Product 4",
    price: "PRICE 100",
    image: "/assets/images/creative/P1.jpg",
  },
];

const hproducts = [
  {
    id: 5,
    title: "Product 5",
    price: "PRICE 100",
    image: "/assets/images/heritage/P10.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    price: "PRICE 100",
    image: "/assets/images/heritage/P9.webp",
  },
  {
    id: 7,
    title: "Product 7",
    price: "PRICE 100",
    image: "/assets/images/heritage/P6.jpeg",
  },
  {
    id: 8,
    title: "Product 8",
    price: "PRICE 100",
    image: "/assets/images/heritage/P19.jpg",
  },
];

const sproducts = [
  {
    id: 9,
    title: "Product 9",
    price: "PRICE 100",
    image: "/assets/images/scrapyard/P13.webp",
  },
  {
    id: 10,
    title: "Product 10",
    price: "PRICE 100",
    image: "/assets/images/scrapyard/P17.webp",
  },
  {
    id: 11,
    title: "Product 10",
    price: "PRICE 100",
    image: "/assets/images/scrapyard/P10.jpg",
  },
  {
    id: 12,
    title: "Product 10",
    price: "PRICE 100",
    image: "/assets/images/scrapyard/P16.webp",
  },
];

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data.products);
        console.log("product data", products);
        // Removed redundant logging of products to avoid dependency issues
      })
      // Removed redundant logging of products to avoid dependency issues
      .catch((err) => console.error(err.message));
  }, []); // Dependency array remains empty to avoid infinite loop

  return (
    <div>
      {/* <BannersTwo
        imageURL={"http://localhost:3000/assets/images/banner/b4.jpg"}
      /> */}
      <Hero />
      <NewProducts title={"Creative"} products={cproducts} />
      <NewProducts title={"Heritage"} products={hproducts} />
      <NewProducts title={"Scrapyard"} products={sproducts} />
      {/* <Pagination /> */}
      <Subs />
      <Testimonial />
      {/* <Contact /> */}
    </div>
  );
};

export default Page;
