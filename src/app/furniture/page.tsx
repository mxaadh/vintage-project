import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const furniture_products = [
  {
    id: 1,
    title: "Modern Sofa",
    detail: "Mid-century inspired 3-seater with walnut legs",
    price: "PRICE $899",
    image: "/assets/images/funniture/P01.jpg",
    category: "Seating",
    material: "Fabric",
  },
  {
    id: 2,
    title: "Industrial Coffee Table",
    detail: "Reclaimed wood top with iron pipe base",
    price: "PRICE $350",
    image: "/assets/images/funniture/P02.jpg",
    category: "Tables",
    material: "Wood/Metal",
  },
  {
    id: 3,
    title: "Scandinavian Bookshelf",
    detail: "Minimalist oak shelving unit with hidden storage",
    price: "PRICE $425",
    image: "/assets/images/funniture/P03.jpg",
    category: "Storage",
    material: "Solid Oak",
  },
  {
    id: 4,
    title: "Velvet Armchair",
    detail: "Luxury emerald green tufted accent chair",
    price: "PRICE $575",
    image: "/assets/images/funniture/P04.jpg",
    category: "Seating",
    material: "Velvet",
  },
  {
    id: 5,
    title: "Farmhouse Dining Table",
    detail: "Rustic 6-seater with distressed finish",
    price: "PRICE $650",
    image: "/assets/images/funniture/P05.jpg",
    category: "Tables",
    material: "Reclaimed Pine",
  },
  {
    id: 6,
    title: "Glass Display Cabinet",
    detail: "Modern curio with LED lighting",
    price: "PRICE $720",
    image: "/assets/images/funniture/P06.jpg",
    category: "Storage",
    material: "Glass/Metal",
  },
  {
    id: 7,
    title: "Leather Recliner",
    detail: "Executive office chair with adjustable headrest",
    price: "PRICE $850",
    image: "/assets/images/funniture/P07.jpg",
    category: "Seating",
    material: "Genuine Leather",
  },
  {
    id: 8,
    title: "Nesting Side Tables",
    detail: "Set of 3 geometric acrylic tables",
    price: "PRICE $280",
    image: "/assets/images/funniture/P08.jpg",
    category: "Tables",
    material: "Acrylic",
  },
  {
    id: 9,
    title: "Vintage Wardrobe",
    detail: "French provincial armoire with mirror",
    price: "PRICE $950",
    image: "/assets/images/funniture/P09.jpg",
    category: "Storage",
    material: "Solid Mahogany",
  },
  {
    id: 10,
    title: "Convertible Sleeper Sofa",
    detail: "Space-saving modern futon design",
    price: "PRICE $775",
    image: "/assets/images/funniture/P010.jpg",
    category: "Seating",
    material: "Microfiber",
  },
  {
    id: 11,
    title: "Marble Console Table",
    detail: "Carrara marble top with brass legs",
    price: "PRICE $690",
    image: "/assets/images/funniture/P011.jpg",
    category: "Tables",
    material: "Marble/Metal",
  },
  {
    id: 12,
    title: "Rattan Lounge Chair",
    detail: "Boho-chic peacock chair with cushions",
    price: "PRICE $325",
    image: "/assets/images/funniture/P13.webp",
    category: "Seating",
    material: "Natural Rattan",
  },
  {
    id: 13,
    title: "Minimalist Desk",
    detail: "Floating writing desk with cable management",
    price: "PRICE $380",
    image: "/assets/images/funniture/P17.jpg",
    category: "Workspace",
    material: "Walnut Veneer",
  },
  {
    id: 14,
    title: "Bar Cabinet",
    detail: "Mid-century modern liquor cabinet",
    price: "PRICE $540",
    image: "/assets/images/funniture/P10.jpg",
    category: "Storage",
    material: "Teak",
  },
];

const Creative = () => {
  return (
    <div>
      <BannerThree name="Furniture" />
      <NewProducts title={"Furniture"} products={furniture_products} />
    </div>
  );
};

export default Creative;
