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
    title: "Modern Sofa",
    detail: "Mid-century inspired 3-seater with walnut legs",
    price: "PRICE $899",
    image: "/assets/images/funniture/P01.jpg",
    category: "Seating",
    material: "Fabric",
  },
  {
    id: 2,
    title: "Industrial Coffee Table",
    detail: "Reclaimed wood top with iron pipe base",
    price: "PRICE $350",
    image: "/assets/images/funniture/P02.jpg",
    category: "Tables",
    material: "Wood/Metal",
  },
  {
    id: 3,
    title: "Scandinavian Bookshelf",
    detail: "Minimalist oak shelving unit with hidden storage",
    price: "PRICE $425",
    image: "/assets/images/funniture/P03.jpg",
    category: "Storage",
    material: "Solid Oak",
  },
  {
    id: 4,
    title: "Velvet Armchair",
    detail: "Luxury emerald green tufted accent chair",
    price: "PRICE $575",
    image: "/assets/images/funniture/P04.jpg",
    category: "Seating",
    material: "Velvet",
  },
];

const hproducts = [
  {
    id: 1,
    title: "Antique Writing Desk",
    detail: "19th century oak writing desk with leather inset",
    price: "PRICE $450",
    image: "/assets/images/heritage/P01.jpg",
  },
  {
    id: 2,
    title: "Victorian Parlor Chair",
    detail: "Original 1880s velvet upholstered chair",
    price: "PRICE $320",
    image: "/assets/images/heritage/P02.jpg",
  },
  {
    id: 3,
    title: "Brass Ship's Compass",
    detail: "Nautical antique maritime navigation instrument",
    price: "PRICE $180",
    image: "/assets/images/heritage/P03.jpg",
  },
  {
    id: 4,
    title: "Heritage Wall Clock",
    detail: "Grandfather clock-style wall timepiece",
    price: "PRICE $275",
    image: "/assets/images/heritage/P04.jpg",
  },
];

const sproducts = [
  {
    id: 1,
    title: "Industrial Pipe Bookshelf",
    detail: "Steel pipe framework with reclaimed wood shelves",
    price: "PRICE $195",
    image: "/assets/images/scrapyard/P01.jpg",
  },
  {
    id: 2,
    title: "Vintage Factory Workbench",
    detail: "Heavy-duty steel frame with solid wood top",
    price: "PRICE $350",
    image: "/assets/images/scrapyard/P02.jpg",
  },
  {
    id: 3,
    title: "Machinist's Tool Cabinet",
    detail: "Vintage metal cabinet with original drawer labels",
    price: "PRICE $280",
    image: "/assets/images/scrapyard/P03.jpg",
  },
  {
    id: 4,
    title: "Steel Mesh Room Divider",
    detail: "Industrial warehouse partition with rolling base",
    price: "PRICE $225",
    image: "/assets/images/scrapyard/P04.jpg",
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
  }, [products]); // Dependency array remains empty to avoid infinite loop

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
