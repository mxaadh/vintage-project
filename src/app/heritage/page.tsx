import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const heritage_products = [
  {
    id: 5,
    title: "Product 5",
    price: "100",
    image: "/assets/images/heritage/P10.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    price: "1200",
    image: "/assets/images/heritage/P9.webp",
  },
  {
    id: 7,
    title: "Product 7",
    price: "1500",
    image: "/assets/images/heritage/P6.jpeg",
  },
  {
    id: 8,
    title: "Product 8",
    price: "1500",
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
