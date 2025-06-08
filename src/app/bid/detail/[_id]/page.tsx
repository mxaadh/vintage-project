"use client";

import BidHistory from "@/components/BidHistory";
import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { createBid, getBidsByProductId } from "@/lib/api/bid";
import { getProductById } from "@/lib/api/product";
import { IBidResponse, IProduct } from "@/types";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BidItemDetail = () => {
  const { token, user } = useAuth();
  if (!token) redirect("/login");

  const params = useParams();
  const id = params?._id as string;
  const [bids, setBids] = useState<IBidResponse>();
  const [currentBid, setCurrentBid] = useState<number>(0);
  const [product, setProducts] = useState<IProduct>();
  const [formData, setFormData] = useState({
    name: JSON.parse(user)?.first_name || "",
    email: JSON.parse(user)?.email || "",
    product: id || "",
    bidAmount: 0,
  },)

  async function fetchProduct() {
    try {
      const response: IProduct = await getProductById(id);
      setProducts(response);
      setTimeout(() => {
        console.log(product, "<< product");

      }, 300)
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  async function fetctBids() {
    try {
      const result: IBidResponse = await getBidsByProductId(id)
      setBids(result);
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  async function handleClick() {
    if (formData.bidAmount < currentBid) {
      alert("Bid Amount Must be higher from letest bid.")
      return;
    }

    try {
      await createBid(formData, token);
      fetctBids()
    } catch (error: unknown) {
      if (error instanceof Error) console.error("Error 'on place bid submit'", error.message);

    }
  }

  useEffect(() => {
    setCurrentBid(product?.price || 0)

    if (bids?.data && bids.data.length > 0) {
      setCurrentBid(bids.data[0].bidAmount || 0)
    }

    if (id) {
      fetchProduct()
      fetctBids()
    };
  }, [id, product, bids]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Item Image */}
        {product?.image && (
          <div className="w-full aspect-square border rounded-2xl overflow-hidden relative">
            <Image
              src={product?.image}
              alt={product?.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Item Details */}
        <div className="space-y-12">
          <div>
            {product?.title && (
              <h1 className="text-3xl font-bold text-CoffeeBrown">
                {product.title}
              </h1>
            )}
            <p className="text-muted-foreground mt-2 text-lg">
              Time Remaining{" "}
              <span className="font-semibold text-xl text-PrimaryGreen">
                03:12:45
              </span>
            </p>
          </div>

          {/* Bid Input */}
          <div className="space-y-2">
            <Label htmlFor="bid" className="text-2xl font-extrabold mb-2">
              Bid Amount
            </Label>

            <div className="flex justify-between">
              <Input
                id="bid"
                className="max-w-lg border-black border-2 height rounded-2xl mr-4 h-15"
                type="number"
                min={currentBid}
                value={formData.bidAmount}
                onChange={(e) => {
                  const newBidAmmount = parseFloat(e.target.value)
                  setFormData({
                    ...formData,
                    bidAmount: newBidAmmount,
                  })
                }}
              />
              <button onClick={handleClick}>
                <Button name="Place Bid" />
              </button>
            </div>

            {/* Current Bid */}
            <div className="text-lg font-semibold">
              Current Bid: <span className="text-PrimaryGreen">{currentBid}</span>
            </div>
          </div>

          {/* Bid History */}
          <div>
            <h3 className="text-2xl font-extrabold mb-2">Bid History</h3>
            <ul className="border border-spacing-2 border-DeepMahogany rounded-lg divide-y">
              {(bids?.data && bids.data.length > 0) ? (
                <BidHistory id={id} />
              ) : (
                <li className="px-4 py-2 flex justify-between text-sm">
                  <span className="font-bold text-lg">No Record Found!</span>
                </li>
              )}
              {/* Add more bid entries as needed */}
            </ul>
          </div>

          {/* Description */}
          {product?.description && (
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product?.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidItemDetail;

