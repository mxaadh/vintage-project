import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

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

const Creative = () => {
  return (
    <div>
      <BannerThree name="Decorative" />
      <NewProducts title={"Decorative"} products={decorative_products} />
    </div>
  );
};

export default Creative;
