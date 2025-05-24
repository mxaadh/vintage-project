import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const heritage_products = [
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

const Heritage = () => {
  return (
    <div>
      <BannerThree name={"Heritage"} />
      <NewProducts title={"Heritage"} products={heritage_products} />
    </div>
  );
};

export default Heritage;
