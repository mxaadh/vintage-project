"use client";

import PageHeadingButtons from "@/components/PageheadingButton";
import ProductForm from "@/components/Form/ProductForm";
import { useAuth } from "@/context/AuthContext";
import { createProduct } from "@/lib/api/product";
import { useRouter } from "next/navigation";
import { IProductPayload } from "@/types/";

const Create = () => {
  const router = useRouter();
  const { token } = useAuth();

  async function onCreateSubmit(data: IProductPayload): Promise<void> {
    try {
      await createProduct(data, token);
      router.push("/admin/product");
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  return (
    <>
      <PageHeadingButtons heading={"Add New Product"} />
      <ProductForm onSubmit={onCreateSubmit} />
    </>
  );
};

export default Create;
