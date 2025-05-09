import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const scrapyard_products = [
  {
    id: 9,
    title: "Product 9",
    price: "100",
    image: "/assets/images/scrapyard/P13.webp",
  },
  {
    id: 10,
    title: "Product 10",
    price: "1200",
    image: "/assets/images/scrapyard/P17.webp",
  },
  {
    id: 11,
    title: "Product 10",
    price: "1500",
    image: "/assets/images/scrapyard/P10.jpg",
  },
  {
    id: 12,
    title: "Product 10",
    price: "1500",
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
