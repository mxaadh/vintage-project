"use client";

import PageHeadingButtons from "@/components/PageheadingButton";
import ProductForm from "@/components/Form/ProductForm";
import { useAuth } from "@/context/AuthContext";
import { getProductById, updateProduct } from "@/lib/api/product";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct, IProductPayload } from "@/types/";

const Edit = () => {
  const params = useParams();
  const id = params?.id as string;

  const router = useRouter();
  const { token } = useAuth();
  const [idata, setIdata] = useState<IProduct>();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: IProduct = await getProductById(id);
        setIdata(response);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  async function onSubmit(data: IProductPayload) {
    try {
      const response: IProduct = await updateProduct(id, data, token);
      console.log("Product updated:", response);
      router.push("/admin/product");
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  return (
    <>
      <PageHeadingButtons heading={"Edit Product"} />
      <ProductForm initialData={idata} onSubmit={onSubmit} />
    </>
  );
};

export default Edit;
