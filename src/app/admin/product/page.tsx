"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Edit, EyeIcon, Plus, Trash } from "lucide-react";
import PageHeadingButtons from "@/components/PageheadingButton";
import SetTimer from "@/components/SetTimer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  deleteProduct,
  getAllProducts,
} from "@/lib/api/product";
import { useAuth } from "@/context/AuthContext";
import { IProductResponse } from "@/types";
import { truncateText } from "@/lib/utils";

const Product = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<IProductResponse>();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res: IProductResponse = await getAllProducts();
    setProducts(res);
  };

  const handleDelete = async (id: string) => {
    setSubmit(true);

    try {
      await deleteProduct(id, token); // Make sure `token` is available from context
      await fetchProducts();
      alert("Product deleted successfully");
      // Optional: Show toast or redirect
      router.push("/admin/product");
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
      <PageHeadingButtons heading={"Products"}>
        <Link
          href={`/admin/product/create`}
          className="flex items-center gap-1"
        >
          <Button>
            <Plus />
            New Product
          </Button>
        </Link>
      </PageHeadingButtons>
      {/* Clients table */}
      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
          <CardDescription>
            {products && (products.data?.length || 0)} results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Timer</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.data?.map((data) => (
                <TableRow key={data._id}>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>
                    {data.image && (
                      <Image
                        src={data.image}
                        alt={data.image}
                        width={50}
                        height={50}
                      />
                    )}
                  </TableCell>
                  <TableCell>{truncateText(String(data?.description), 7)}</TableCell>
                  <TableCell>{data.category}</TableCell>
                  <TableCell>{data.price}</TableCell>
                  <TableCell>
                    <SetTimer oldData={data} />
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size={"icon"} variant={"ghost"}>
                      <Link href={`/admin/product/${data._id}`}>
                        <EyeIcon className={"text-green-800"} />
                      </Link>
                    </Button>
                    <Button variant="ghost">
                      <Link href={`/admin/product/edit/${data._id}`}>
                        <Edit className={"text-yellow-800"} />
                      </Link>
                    </Button>
                    <Button
                      size={"icon"}
                      variant="ghost"
                      onClick={() => handleDelete(data._id)}
                      disabled={submit}
                    >
                      <Trash className={"text-red-800"} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
