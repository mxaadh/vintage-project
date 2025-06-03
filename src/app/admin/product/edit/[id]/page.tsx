"use client";

import PageHeadingButtons from "@/components/PageheadingButton";
import ProductForm from "@/components/ProductForm";
import { useAuth } from "@/context/AuthContext";
import { getProductById, updateProduct } from "@/lib/api/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductPayload, ProductResponse } from "@/types/product";

interface EditPageProps {
  params: {
    id: string;
  };
}

const Edit = ({ params }: EditPageProps) => {
  const { id } = params;

  const router = useRouter();
  const { token } = useAuth();
  const [idata, setIdata] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: ProductResponse = await getProductById(id);
        setIdata(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    }
    fetchProduct();
  }, [id]);

  async function onSubmit(data: ProductPayload) {
    try {
      const response: ProductResponse = await updateProduct(id, data, token);
      console.log("Product updated:", response);
      router.push("/admin/product");
      // Optional: show success toast or redirect
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
