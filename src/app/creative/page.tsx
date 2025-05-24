import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const cproducts = [];
const creative_products = [
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

const Creative = () => {
  return (
    <div>
      <BannerThree name={"Creative"} />
      <NewProducts title={"Creative"} products={creative_products} />
    </div>
  );
};

export default Creative;
