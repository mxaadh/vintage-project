"use client";

import BannersOne from "@/components/BannersOne";
import Newsletter from "@/components/Form/Newsletter";
import NewProducts from "@/components/NewProducts";
import { getAllProducts } from "@/lib/api/product";
import { IProductResponse } from "@/types";
import { useEffect, useState } from "react";

const Category = () => {
  const [cproducts, setCProducts] = useState<IProductResponse>();
  const [hproducts, setHProducts] = useState<IProductResponse>();
  const [sproducts, setSProducts] = useState<IProductResponse>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res: IProductResponse = await getAllProducts();
    setCProducts(res);
    setHProducts(res);
    setSProducts(res);
  };

  return (
    <div>
      <BannersOne
        image={"/assets/images/category/c1.jpg"}
        title={"Creative"}
        button={{
          btnTitle: "Get Yours Creative",
          link: "creative",
        }}
      />
      {cproducts && <NewProducts title={"Creative"} products={cproducts} />}
      <BannersOne
        image={"/assets/images/category/c2.jpg"}
        title={"Heritage"}
        button={{
          btnTitle: "Get Yours Heritage",
          link: "heritage",
        }}
      />
      {hproducts && <NewProducts title={"Heritage"} products={hproducts} />}
      <BannersOne
        image={"/assets/images/category/c3.jpg"}
        title={"Scrapyard"}
        button={{
          btnTitle: "Get Yours Scrapyard",
          link: "scrapyard",
        }}
      />
      {sproducts && <NewProducts title={"Scrapyard"} products={sproducts} />}
      <Newsletter />
    </div>
  );
};

export default Category;

/*

const creative_products = {
  data: [
    {
      _id: 1,
      title: "Product 1",
      price: "100",
      image: "/assets/images/creative/P11.webp",
    },
    {
      _id: 2,
      title: "Product 2",
      price: "1200",
      image: "/assets/images/creative/P14.jpg",
    },
    {
      _id: 3,
      title: "Product 3",
      price: "1500",
      image: "/assets/images/creative/P10.jpeg",
    },
    {
      _id: 4,
      title: "Product 4",
      price: "1500",
      image: "/assets/images/creative/P1.jpg",
    },
  ],
};

const heritage_products = {
  data: [
    {
      _id: 5,
      title: "Product 5",
      price: "100",
      image: "/assets/images/heritage/P10.jpg",
    },
    {
      _id: 6,
      title: "Product 6",
      price: "1200",
      image: "/assets/images/heritage/P9.webp",
    },
    {
      _id: 7,
      title: "Product 7",
      price: "1500",
      image: "/assets/images/heritage/P6.jpeg",
    },
    {
      _id: 8,
      title: "Product 8",
      price: "1500",
      image: "/assets/images/heritage/P19.jpg",
    },
  ],
};

const scrapyard_products = {
  data: [
    {
      _id: 9,
      title: "Product 9",
      price: "100",
      image: "/assets/images/scrapyard/P13.webp",
    },
    {
      _id: 10,
      title: "Product 10",
      price: "1200",
      image: "/assets/images/scrapyard/P17.webp",
    },
    {
      _id: 11,
      title: "Product 10",
      price: "1500",
      image: "/assets/images/scrapyard/P10.jpg",
    },
    {
      _id: 12,
      title: "Product 10",
      price: "1500",
      image: "/assets/images/scrapyard/P16.webp",
    },
  ],
};

*/
