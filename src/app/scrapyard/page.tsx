import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const scrapyard_products = [
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

const Scrapyard = () => {
  return (
    <div>
      <BannerThree name={"Scrapyard"} />
      <NewProducts title={"Scrapyard"} products={scrapyard_products} />
    </div>
  );
};

export default Scrapyard;
