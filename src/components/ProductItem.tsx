import Image from "next/image";
import Link from "next/link";


type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product } : ProductItemProps) => {
  return (
    <div className="w-[285px] h-[446px] relative">
      <div className="w-[285px] h-[145px] left-0 top-[301px] absolute bg-MutedSand/50"></div>
      <div className="w-56 left-[16px] top-[317px] absolute">
        <div className="h-[30px] left-0 top-[69px] absolute justify-start items-center gap-4 inline-flex">
          <h4 className="text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px] ">
            {product.price}
          </h4>
        </div>
        <div className="w-56 h-[61px] left-0 top-0 absolute">
          <Link
            href={"/detail"}
            className="left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px] hover:text-AntiqueGold"
          >
            {product.title}
          </Link>
          <div className="left-0 top-[37px] absolute text-[#898989] text-base font-medium font-['Poppins'] leading-normal">
            Outdoor bar table and stool
          </div>
        </div>
      </div>
      <Image
        alt={product.image}
        className="w-[285px] h-[301px] left-0 top-0 absolute"
        src={product.image}
        width={285}
        height={301}
      />
      <div className="w-12 h-12 left-[213px] top-[24px] absolute">
        <div className="w-12 h-12 left-0 top-0 absolute bg-[#2ec1ac] rounded-full"></div>
        <div className="left-[8px] top-[12px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
          New
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
