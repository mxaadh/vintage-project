import { truncateText } from "@/lib/utils";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: IProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[285px] h-[446px] relative mb-8">
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
      <div className="w-[285px] h-[170px] left-0 top-[301px] absolute bg-MutedSand/50"></div>
      <div className="w-56 left-[16px] top-[317px] absolute">
        <div className="w-56 h-[61px] left-0 top-0 absolute">
          <Link
            href={`/detail/${product._id}`}
            className="left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px] hover:text-AntiqueGold"
          >
            {product.title}
          </Link>
          <div className="left-0 top-[60px] absolute text-[#898989] text-sm font-small font-['Poppins'] leading-normal">
            {truncateText(String(product?.description), 7)}
          </div>
          <div className="h-[30px] left-0 top-[110px] absolute justify-start items-center gap-4 inline-flex">
            <h4 className="text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">
              {product.price}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
