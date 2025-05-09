import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const creative_products = [
  {
    id: 1,
    title: "Product 1",
    price: "100",
    image: "/assets/images/creative/P11.webp",
  },
  {
    id: 2,
    title: "Product 2",
    price: "1200",
    image: "/assets/images/creative/P14.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: "1500",
    image: "/assets/images/creative/P10.jpeg",
  },
  {
    id: 4,
    title: "Product 4",
    price: "1500",
    image: "/assets/images/creative/P1.jpg",
  },
  {
    id: 1,
    title: "Product 1",
    price: "100",
    image: "/assets/images/creative/P11.webp",
  },
  {
    id: 2,
    title: "Product 2",
    price: "1200",
    image: "/assets/images/creative/P14.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: "1500",
    image: "/assets/images/creative/P10.jpeg",
  },
  {
    id: 4,
    title: "Product 4",
    price: "1500",
    image: "/assets/images/creative/P1.jpg",
  },
  {
    id: 1,
    title: "Product 1",
    price: "100",
    image: "/assets/images/creative/P11.webp",
  },
  {
    id: 2,
    title: "Product 2",
    price: "1200",
    image: "/assets/images/creative/P14.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: "1500",
    image: "/assets/images/creative/P10.jpeg",
  },
  {
    id: 4,
    title: "Product 4",
    price: "1500",
    image: "/assets/images/creative/P1.jpg",
  },
];

const Creative = () => {
  return (
    <div>
      <BannerThree name="Decorative" />
      <NewProducts title={"Decorative"} products={creative_products} />
    </div>
  );
};

export default Creative;
