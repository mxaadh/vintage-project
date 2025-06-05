"use client";

import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";
import { getAllProducts } from "@/lib/api/product";
import { IProductResponse } from "@/types";
import { useEffect, useState } from "react";

const Heritage = () => {
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
      <BannerThree name="Heritage" />
      {products && <NewProducts title={"Heritage"} products={products} />}
    </div>
  );
};

export default Heritage;

/* 

const decorative_products = [
  {
    id: 1,
    title: "Velvet Throw Pillows (Set of 2)",
    price: "65",
    image: "/assets/images/decorative/P01.jpg",
    detail: "Luxury embroidered velvet cushion covers",
  },
  {
    id: 2,
    title: "Marble Coffee Table",
    price: "1200",
    image: "/assets/images/decorative/P02.jpg",
    detail: "Modern white marble with gold metal legs",
  },
  {
    id: 3,
    title: "Macrame Wall Hanging",
    price: "85",
    image: "/assets/images/decorative/P03.jpg",
    detail: "Handmade boho-style fiber art",
  },
  {
    id: 4,
    title: "Ceramic Table Lamp",
    price: "120",
    image: "/assets/images/decorative/P04.jpg",
    detail: "Minimalist white glaze with linen shade",
  },
  {
    id: 5,
    title: "Geometric Bookcase",
    price: "450",
    image: "/assets/images/decorative/P05.jpg",
    detail: "Hexagonal modular shelving unit",
  },
  {
    id: 6,
    title: "Faux Fur Rug",
    price: "220",
    image: "/assets/images/decorative/P06.jpg",
    detail: "Soft shaggy white area rug (5'x7')",
  },
  // {
  //   id: 7,
  //   title: "Glass Terrarium",
  //   price: "75",
  //   image: "/assets/images/decorative/P07.jpg",
  //   detail: "Hanging geometric plant display",
  // },
  {
    id: 8,
    title: "Metal Wall Art",
    price: "150",
    image: "/assets/images/decorative/P08.jpg",
    detail: "Abstract brushed steel sculpture",
  },
  {
    id: 9,
    title: "Woven Storage Baskets",
    price: "95",
    image: "/assets/images/decorative/P09.jpg",
    detail: "Set of 3 natural fiber organizers",
  },
  {
    id: 10,
    title: "Crystal Candle Holders",
    price: "60",
    image: "/assets/images/decorative/P010.jpg",
    detail: "Pair of faceted glass votives",
  },
  {
    id: 11,
    title: "Leather Ottoman",
    price: "350",
    image: "/assets/images/decorative/P011.jpg",
    detail: "Tufted genuine leather storage stool",
  },
  {
    id: 12,
    title: "Abstract Canvas Art",
    price: "180",
    image: "/assets/images/decorative/P012.jpg",
    detail: 'Large modern painting (36"x48")',
  },
  {
    id: 13,
    title: "Brass Floor Mirror",
    price: "400",
    image: "/assets/images/decorative/P013.jpg",
    detail: "Full-length arched decorative mirror",
  },
  // {
  //   id: 14,
  //   title: "Silk Curtain Panels",
  //   price: "130",
  //   image: "/assets/images/decorative/P14.jpg",
  //   detail: "Pair of thermal insulated drapes",
  // },
  // {
  //   id: 15,
  //   title: "Concrete Planters",
  //   price: "90",
  //   image: "/assets/images/decorative/P15.jpg",
  //   detail: "Set of 3 modern geometric pots",
  // },
];

*/

/* 


const heritage_products = [
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
  // {
  //   id: 5,
  //   title: "Vintage Wooden Chair",
  //   detail: "Classic hand-carved wooden accent chair",
  //   price: "PRICE $140",
  //   image: "/assets/images/heritage/P10.jpg",
  // },
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
  {
    id: 9,
    title: "Colonial Trunk Chest",
    detail: "Early American travel trunk with iron hardware",
    price: "PRICE $290",
    image: "/assets/images/heritage/P1.jpg",
  },
  // {
  //   id: 10,
  //   title: "Vintage School Globe",
  //   detail: "1930s political geography classroom globe",
  //   price: "PRICE $125",
  //   image: "/assets/images/heritage/P11.jpeg",
  // },
  // {
  //   id: 11,
  //   title: "Art Deco Bar Cart",
  //   detail: "1930s chrome and glass serving cart",
  //   price: "PRICE $350",
  //   image: "/assets/images/heritage/P12.webp",
  // },
  // {
  //   id: 12,
  //   title: "Antique Oil Lamp",
  //   detail: "Brass hurricane lamp with glass chimney",
  //   price: "PRICE $85",
  //   image: "/assets/images/heritage/P13.jpeg",
  // },
  {
    id: 13,
    title: "Victorian Cameo Collection",
    detail: "Set of 5 framed portrait cameos",
    price: "PRICE $110",
    image: "/assets/images/heritage/P14.jpeg",
  },
  // {
  //   id: 14,
  //   title: "Heritage Typewriter",
  //   detail: "Early 20th century mechanical typewriter",
  //   price: "PRICE $220",
  //   image: "/assets/images/heritage/P15.jpg",
  // },
  {
    id: 15,
    title: "Brass Telescope",
    detail: "19th century nautical brass telescope",
    price: "PRICE $195",
    image: "/assets/images/heritage/P16.jpg",
  },
  {
    id: 16,
    title: "Vintage Pharmacy Cabinet",
    detail: "Apothecary drawer unit with glass jars",
    price: "PRICE $380",
    image: "/assets/images/heritage/P18.jpeg",
  },
  {
    id: 17,
    title: "Antique Portrait Frame",
    detail: "Hand-carved wooden oval picture frame",
    price: "PRICE $75",
    image: "/assets/images/heritage/P2.jpg",
  },
  {
    id: 18,
    title: "Victorian Opera Glasses",
    detail: "Mother-of-pearl inlaid theater binoculars",
    price: "PRICE $90",
    image: "/assets/images/heritage/P3.jpg",
  },
  {
    id: 19,
    title: "Heritage Chess Set",
    detail: "Hand-carved ebony and boxwood pieces",
    price: "PRICE $160",
    image: "/assets/images/heritage/P4.jpg",
  },
  {
    id: 20,
    title: "Vintage Leather Luggage",
    detail: "Set of 3 steamer trunks with brass fittings",
    price: "PRICE $420",
    image: "/assets/images/heritage/P5.jpeg",
  },
  // {
  //   id: 21,
  //   title: "Antique Music Box",
  //   detail: "Swiss cylinder musical box with inlay",
  //   price: "PRICE $240",
  //   image: "/assets/images/heritage/P7.jpg",
  // },
  {
    id: 22,
    title: "Victorian Hat Stand",
    detail: "Cast iron hall tree with brass hooks",
    price: "PRICE $175",
    image: "/assets/images/heritage/P8.jpg",
  },
];

*/
