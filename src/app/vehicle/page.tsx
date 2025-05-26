import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const vehicle_products = [
  {
    id: 1,
    title: "Vintage Motorcycle Helmet",
    detail: "Classic open-face helmet with retro design",
    price: "PRICE $120",
    image: "/assets/images/vehicle/P01.jpg",
    category: "Safety Gear",
  },
  {
    id: 2,
    title: "Car Mechanic Tool Set",
    detail: "125-piece professional automotive tool kit",
    price: "PRICE $350",
    image: "/assets/images/vehicle/P02.jpg",
    category: "Tools",
  },
  {
    id: 3,
    title: "Antique Gas Pump Replica",
    detail: "Vintage-style metal fuel pump decor",
    price: "PRICE $280",
    image: "/assets/images/vehicle/P03.jpg",
    category: "Decor",
  },
  {
    id: 4,
    title: "Classic Car Steering Wheel",
    detail: "Wood-rimmed vintage steering wheel",
    price: "PRICE $175",
    image: "/assets/images/vehicle/P04.jpg",
    category: "Parts",
  },
  {
    id: 5,
    title: "Tire Pressure Gauge Set",
    detail: "Professional analog/digital gauge kit",
    price: "PRICE $45",
    image: "/assets/images/vehicle/P05.jpg",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Garage Wall Clock",
    detail: "Auto shop-style mechanical clock",
    price: "PRICE $65",
    image: "/assets/images/vehicle/P06.jpg",
    category: "Decor",
  },
  {
    id: 7,
    title: "Vintage License Plate",
    detail: "Authentic 1960s metal license plate",
    price: "PRICE $95",
    image: "/assets/images/vehicle/P07.jpg",
    category: "Collectibles",
  },
  {
    id: 8,
    title: "Car Lift Model",
    detail: "Detailed scale model of hydraulic lift",
    price: "PRICE $75",
    image: "/assets/images/vehicle/P08.jpg",
    category: "Models",
  },
  {
    id: 9,
    title: "Mechanic's Creeper",
    detail: "Low-profile rolling garage creeper",
    price: "PRICE $85",
    image: "/assets/images/vehicle/P09.jpg",
    category: "Equipment",
  },
  {
    id: 10,
    title: "Vintage Oil Can",
    detail: "Collectible metal lubricant canister",
    price: "PRICE $55",
    image: "/assets/images/vehicle/P010.jpg",
    category: "Collectibles",
  },
  {
    id: 11,
    title: "Car Diagnostic Scanner",
    detail: "Professional OBD2 code reader",
    price: "PRICE $150",
    image: "/assets/images/vehicle/P8.webp",
    category: "Electronics",
  },
  {
    id: 12,
    title: "Garage Sign Neon Light",
    detail: "Retro-style ``Open`` neon sign",
    price: "PRICE $125",
    image: "/assets/images/vehicle/P9.jpg",
    category: "Lighting",
  },
];

const Creative = () => {
  return (
    <div>
      <BannerThree name="Vehicle" />
      <NewProducts title={"Vehicle"} products={vehicle_products} />
    </div>
  );
};

export default Creative;
