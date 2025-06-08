"use client";

import BannerThree from "@/components/BannersThree";
import NewProducts from "@/components/NewProducts";
import { getAllProducts } from "@/lib/api/product";
import { IProductResponse } from "@/types";
import { useEffect, useState } from "react";

const Scrapyard = () => {
  const [products, setProducts] = useState<IProductResponse>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res: IProductResponse = await getAllProducts({
      category: "Scrapyard",
    });
    setProducts(res);
  };

  return (
    <div>
      <BannerThree name="Scrapyard" />
      {products && <NewProducts title={"Scrapyard"} products={products} />}
    </div>
  );
};

export default Scrapyard;
