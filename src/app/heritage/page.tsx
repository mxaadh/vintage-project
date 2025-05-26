import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";

const heritage_products = [
  {
    id: 1,
    title: "Antique Writing Desk",
    detail: "19th century oak writing desk with leather inset",
    price: "PRICE $450",
    image: "/assets/images/heritage/P01.jpg",
  },
  {
    id: 2,
    title: "Victorian Parlor Chair",
    detail: "Original 1880s velvet upholstered chair",
    price: "PRICE $320",
    image: "/assets/images/heritage/P02.jpg",
  },
  {
    id: 3,
    title: "Brass Ship's Compass",
    detail: "Nautical antique maritime navigation instrument",
    price: "PRICE $180",
    image: "/assets/images/heritage/P03.jpg",
  },
  {
    id: 4,
    title: "Heritage Wall Clock",
    detail: "Grandfather clock-style wall timepiece",
    price: "PRICE $275",
    image: "/assets/images/heritage/P04.jpg",
  },
  // {
  //   id: 5,
  //   title: "Vintage Wooden Chair",
  //   detail: "Classic hand-carved wooden accent chair",
  //   price: "PRICE $140",
  //   image: "/assets/images/heritage/P10.jpg",
  // },
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
    id: 9,
    title: "Colonial Trunk Chest",
    detail: "Early American travel trunk with iron hardware",
    price: "PRICE $290",
    image: "/assets/images/heritage/P1.jpg",
  },
  // {
  //   id: 10,
  //   title: "Vintage School Globe",
  //   detail: "1930s political geography classroom globe",
  //   price: "PRICE $125",
  //   image: "/assets/images/heritage/P11.jpeg",
  // },
  // {
  //   id: 11,
  //   title: "Art Deco Bar Cart",
  //   detail: "1930s chrome and glass serving cart",
  //   price: "PRICE $350",
  //   image: "/assets/images/heritage/P12.webp",
  // },
  // {
  //   id: 12,
  //   title: "Antique Oil Lamp",
  //   detail: "Brass hurricane lamp with glass chimney",
  //   price: "PRICE $85",
  //   image: "/assets/images/heritage/P13.jpeg",
  // },
  {
    id: 13,
    title: "Victorian Cameo Collection",
    detail: "Set of 5 framed portrait cameos",
    price: "PRICE $110",
    image: "/assets/images/heritage/P14.jpeg",
  },
  // {
  //   id: 14,
  //   title: "Heritage Typewriter",
  //   detail: "Early 20th century mechanical typewriter",
  //   price: "PRICE $220",
  //   image: "/assets/images/heritage/P15.jpg",
  // },
  {
    id: 15,
    title: "Brass Telescope",
    detail: "19th century nautical brass telescope",
    price: "PRICE $195",
    image: "/assets/images/heritage/P16.jpg",
  },
  {
    id: 16,
    title: "Vintage Pharmacy Cabinet",
    detail: "Apothecary drawer unit with glass jars",
    price: "PRICE $380",
    image: "/assets/images/heritage/P18.jpeg",
  },
  {
    id: 17,
    title: "Antique Portrait Frame",
    detail: "Hand-carved wooden oval picture frame",
    price: "PRICE $75",
    image: "/assets/images/heritage/P2.jpg",
  },
  {
    id: 18,
    title: "Victorian Opera Glasses",
    detail: "Mother-of-pearl inlaid theater binoculars",
    price: "PRICE $90",
    image: "/assets/images/heritage/P3.jpg",
  },
  {
    id: 19,
    title: "Heritage Chess Set",
    detail: "Hand-carved ebony and boxwood pieces",
    price: "PRICE $160",
    image: "/assets/images/heritage/P4.jpg",
  },
  {
    id: 20,
    title: "Vintage Leather Luggage",
    detail: "Set of 3 steamer trunks with brass fittings",
    price: "PRICE $420",
    image: "/assets/images/heritage/P5.jpeg",
  },
  // {
  //   id: 21,
  //   title: "Antique Music Box",
  //   detail: "Swiss cylinder musical box with inlay",
  //   price: "PRICE $240",
  //   image: "/assets/images/heritage/P7.jpg",
  // },
  {
    id: 22,
    title: "Victorian Hat Stand",
    detail: "Cast iron hall tree with brass hooks",
    price: "PRICE $175",
    image: "/assets/images/heritage/P8.jpg",
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
