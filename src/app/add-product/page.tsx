"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductForm from "@/components/Form/ProductForm";
import { IProductPayload } from "@/types";
import { createProduct } from "@/lib/api/product";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PageHeadingButtons from "@/components/PageheadingButton";

export default function AddProduct() {
  const router = useRouter();
  const { token } = useAuth();

  async function onSubmit(data: IProductPayload): Promise<void> {
    try {
      await createProduct(data, token);
      router.push("/admin/product");
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  return (
    <Card className="max-w-6xl mx-auto mt-10 mb-10 p-6 border-none shadow-none space-y-5">
      <CardHeader>
        <PageHeadingButtons heading="Manage Your Products" />
      </CardHeader>
      <CardContent>
        <ProductForm onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
