import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const creative_products = [
  // {
  //   id: 2,
  //   title: "Vintage Accordion",
  //   detail: "Restored 1920s musical instrument",
  //   price: "PRICE $150",
  //   image: "/assets/images/creative/P14.jpg",
  // },
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
  {
    id: 5,
    title: "Modern Abstract Painting",
    detail: "Large contemporary canvas artwork",
    price: "PRICE $220",
    image: "/assets/images/creative/P12.webp",
  },
  {
    id: 6,
    title: "Ceramic Vase Collection",
    detail: "Set of 3 hand-glazed vases",
    price: "PRICE $95",
    image: "/assets/images/creative/P13.jpg",
  },
  // {
  //   id: 7,
  //   title: "Mid-Century Chair",
  //   detail: "Vintage teak wood armchair",
  //   price: "PRICE $175",
  //   image: "/assets/images/creative/P15.jpg",
  // },
  {
    id: 8,
    title: "Art Deco Mirror",
    detail: "Ornate vintage wall mirror",
    price: "PRICE $135",
    image: "/assets/images/creative/P2.jpg",
  },
  {
    id: 9,
    title: "Handwoven Tapestry",
    detail: "Colorful textile wall hanging",
    price: "PRICE $85",
    image: "/assets/images/creative/P3.jpg",
  },
  // {
  //   id: 10,
  //   title: "Glass Sculpture",
  //   detail: "Modern blown glass centerpiece",
  //   price: "PRICE $195",
  //   image: "/assets/images/creative/P4.avif",
  // },
  {
    id: 11,
    title: "Industrial Desk Lamp",
    detail: "Adjustable steel workspace lighting",
    price: "PRICE $65",
    image: "/assets/images/creative/P5.avif",
  },
  {
    id: 12,
    title: "Minimalist Clock",
    detail: "Scandinavian-style wall clock",
    price: "PRICE $75",
    image: "/assets/images/creative/P6.webp",
  },
  // {
  //   id: 13,
  //   title: "Vintage Typewriter",
  //   detail: "Restored 1950s writing machine",
  //   price: "PRICE $210",
  //   image: "/assets/images/creative/P7.jpg",
  // },
  // {
  //   id: 14,
  //   title: "Oriental Room Divider",
  //   detail: "Hand-painted folding screen",
  //   price: "PRICE $250",
  //   image: "/assets/images/creative/P8.jpeg",
  // },
  {
    id: 15,
    title: "Abstract Metal Sculpture",
    detail: "Modern outdoor garden art",
    price: "PRICE $165",
    image: "/assets/images/creative/P9.webp",
  },
  {
    id: 16,
    title: "Antique Globe",
    detail: "Vintage world map collectible",
    price: "PRICE $125",
    image: "/assets/images/creative/P-16.jpg",
  },
  {
    id: 17,
    title: "Crystal Chandelier",
    detail: "Elegant ceiling lighting fixture",
    price: "PRICE $290",
    image: "/assets/images/creative/P-17.jpg",
  },
  {
    id: 1,
    title: "African Tribal Mask",
    detail: "Hand-carved decorative wooden mask",
    price: "PRICE $120",
    image: "/assets/images/creative/P11.webp",
  },
];

const Creative = () => {
  return (
    <div>
      <BannerThree name={"Creative"} />
      <NewProducts title={"Creative"} products={creative_products} />
    </div>
  );
};

export default Creative;
