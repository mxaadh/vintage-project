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
    title: "African Tribal Mask",
    detail: "Hand-carved decorative wooden mask",
    price: "PRICE $120",
    image: "/assets/images/creative/P11.webp",
  },
  {
    id: 2,
    title: "Vintage Accordion",
    detail: "Handcrafted wooden sculpture",
    price: "PRICE $150",
    image: "/assets/images/creative/P14.jpg",
  },
  {
    id: 3,
    title: "Bronze Temple Lamp",
    detail: "Detailed antique-style brass décor",
    price: "PRICE $185",
    image: "/assets/images/creative/P10.jpeg",
  },
  {
    id: 4,
    title: "Classical Bust Sculpture",
    detail: "Artistic resin bust for interiors",
    price: "PRICE $110",
    image: "/assets/images/creative/P1.jpg",
  },
];

const hproducts = [
  {
    id: 5,
    title: "Vintage Wooden Chair",
    detail: "Classic hand-carved wooden accent chair",
    price: "PRICE $140",
    image: "/assets/images/heritage/P10.jpg",
  },
  {
    id: 6,
    title: "Retro Rotary Telephone",
    detail: "Authentic 1960s vintage rotary dial phone",
    price: "PRICE $95",
    image: "/assets/images/heritage/P9.webp",
  },
  {
    id: 7,
    title: "Baroque Wall Mirror",
    detail: "Ornate gold-leaf antique-style mirror",
    price: "PRICE $170",
    image: "/assets/images/heritage/P6.jpeg",
  },
  {
    id: 8,
    title: "Traditional Banjo",
    detail: "Handcrafted vintage wooden banjo",
    price: "PRICE $130",
    image: "/assets/images/heritage/P19.jpg",
  },
];

const sproducts = [
  {
    id: 9,
    title: "Rustic Storage Cabinet",
    detail: "Tall reclaimed wood cabinet with distressed finish",
    price: "PRICE $120",
    image: "/assets/images/scrapyard/P13.webp",
  },
  {
    id: 10,
    title: "Vintage Drum Stool",
    detail: "Handmade upcycled drum-style wooden stool",
    price: "PRICE $85",
    image: "/assets/images/scrapyard/P17.webp",
  },
  {
    id: 11,
    title: "Reclaimed Window Shelf",
    detail: "Wall shelf made from repurposed window panels",
    price: "PRICE $110",
    image: "/assets/images/scrapyard/P10.jpg",
  },
  {
    id: 12,
    title: "Antique Door Handles",
    detail: "Pair of cast iron handles salvaged from vintage doors",
    price: "PRICE $65",
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
        imageURL={"/assets/images/banner/b4.jpg"}
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
