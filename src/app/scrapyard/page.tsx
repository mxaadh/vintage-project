"use client";

import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";
import { getAllProducts } from "@/lib/api/product";
import { IProductResponse } from "@/types";
import { useEffect, useState } from "react";

const Scrapyard = () => {
  const [products, setProducts] = useState<IProductResponse>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res: IProductResponse = await getAllProducts();
    setProducts(res);
  };

  return (
    <div>
      <BannerThree name="Scrapyard" />
      {products && <NewProducts title={"Scrapyard"} products={products} />}
    </div>
  );
};

export default Scrapyard;

/* const scrapyard_products = [
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
  {
    id: 5,
    title: "Factory Pendant Lights",
    detail: "Set of 3 enameled industrial work lights",
    price: "PRICE $145",
    image: "/assets/images/scrapyard/P05.jpg",
  },
  {
    id: 6,
    title: "I-Beam Coffee Table",
    detail: "Structural steel base with thick glass top",
    price: "PRICE $275",
    image: "/assets/images/scrapyard/P06.jpg",
  },
  {
    id: 7,
    title: "Industrial Locker Set",
    detail: "Three-section steel locker with original patina",
    price: "PRICE $320",
    image: "/assets/images/scrapyard/P07.jpg",
  },
  {
    id: 8,
    title: "Vintage Factory Stool",
    detail: "Adjustable steel stool with leather seat",
    price: "PRICE $125",
    image: "/assets/images/scrapyard/P08.jpg",
  },
  // {
  //   id: 9,
  //   title: "Reclaimed Wood Cabinet",
  //   detail: "Barn wood storage with visible joinery",
  //   price: "PRICE $240",
  //   image: "/assets/images/scrapyard/P1.jpg",
  // },
  {
    id: 10,
    title: "Industrial Window Frame",
    detail: "Factory sash window converted to wall art",
    price: "PRICE $95",
    image: "/assets/images/scrapyard/P10.jpg",
  },
  // {
  //   id: 11,
  //   title: "Steel Drum End Table",
  //   detail: "Upcycled 55-gallon barrel with glass top",
  //   price: "PRICE $180",
  //   image: "/assets/images/scrapyard/P4.webp",
  // },
  // {
  //   id: 12,
  //   title: "Vintage Tool Wall Display",
  //   detail: "Collection of antique wrenches and pliers",
  //   price: "PRICE $85",
  //   image: "/assets/images/scrapyard/P16.webp",
  // },
  // {
  //   id: 13,
  //   title: "Factory Cart Coffee Table",
  //   detail: "Industrial cart with reclaimed wood top",
  //   price: "PRICE $295",
  //   image: "/assets/images/scrapyard/P2.jpg",
  // },
  // {
  //   id: 15,
  //   title: "Conveyor Belt Table",
  //   detail: "Industrial belt segments on steel base",
  //   price: "PRICE $210",
  //   image: "/assets/images/scrapyard/P5.webp",
  // },
  {
    id: 16,
    title: "Machinery Parts Sculpture",
    detail: "Abstract assembly of gears and pistons",
    price: "PRICE $155",
    image: "/assets/images/scrapyard/P09.jpg",
  },
  {
    id: 17,
    title: "Industrial Pipe Coat Rack",
    detail: "Black iron pipe wall-mounted organizer",
    price: "PRICE $75",
    image: "/assets/images/scrapyard/P6.jpg",
  },
  {
    id: 14,
    title: "Steel Gauge Cluster",
    detail: "Vintage pressure gauges in welded frame",
    price: "PRICE $120",
    image: "/assets/images/scrapyard/P3.jpg",
  },
]; */
