"use client";

import PageHeadingButtons from "@/components/PageheadingButton";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";
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
import { useEffect, useState } from "react";
import { getAllProducts } from "@/lib/api/product";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

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
          <CardDescription>{products.length || 0} results</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((data) => (
                <TableRow key={data._id}>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.category}</TableCell>
                  <TableCell>{data.price}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell className="text-right space-x-2">
                    {/* <Button size={"icon"} variant={"ghost"}>
                      <Link href={`/bookings/${request._id}`}>
                        <EyeIcon className={"text-green-800"} />
                      </Link>
                    </Button> */}
                    <Button variant="ghost">
                      <Link href={`/admin/product/${data._id}/edit`}>
                        <Edit className={"text-yellow-800"} />
                      </Link>
                    </Button>
                    {/* <form
                      method="POST"
                      action={`/bookings/${request._id}`}
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (confirm("Are you sure?")) {
                          Inertia.delete(`/bookings/${request._id}`);
                        }
                      }}
                      className="inline"
                    >
                      <Button size={"icon"} variant="ghost" type="submit">
                        <Trash className={"text-red-800"} />
                      </Button>
                    </form> */}
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
