"use client";

import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";
import { getAllProducts } from "@/lib/api/product";
import { IProductResponse } from "@/types";
import { useEffect, useState } from "react";

const Creative = () => {
  const [products, setProducts] = useState<IProductResponse>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res: IProductResponse = await getAllProducts({
      category: "Creative",
    });
    setProducts(res);
  };

  return (
    <div>
      <BannerThree name={"Creative"} />
      {products && <NewProducts title={"Creative"} products={products} />}
    </div>
  );
};

export default Creative;
