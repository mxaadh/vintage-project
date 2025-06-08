"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import BannerThree from "@/components/BannersThree";

const BiddingRoom = () => {
  const items = Array.from({ length: 8 });

  return (
    <>
      <BannerThree name="Bidding Room" />
      <section className="w-full py-16 px-4 lg:px-20 bg-WarmWhite font-poppins">
        <p className="text-lg text-center text-Terracotta mb-8">
          Place your bids and own timeless elegance
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
          <Select>
            <SelectTrigger className="w-[150px] border-Terracotta text-Terracotta">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jewelry">Jewelry</SelectItem>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[150px] border-Terracotta text-Terracotta">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[150px] border-Terracotta text-Terracotta">
              <SelectValue placeholder="Ending Soon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soonest">Soonest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Slider Filter */}
        <div className="max-w-md mx-auto mb-12">
          <Label className="text-sm text-CoffeeBrown mb-1 block">
            Adjust Price
          </Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((_, i) => (
            <div
              key={i}
              className="border border-Terracotta p-4 rounded-xl space-y-3 bg-MutedSand/60"
            >
              <div className="w-full aspect-square relative rounded overflow-hidden">
                <Image
                  src="/assets/images/banner/b11.jpeg"
                  alt="Item"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-CoffeeBrown font-poppins">
                Item Title
              </h3>
              <p className="text-sm text-Terracotta font-poppins">02:34:12</p>
              <p className="text-base font-medium font-poppins text-black">
                Current Bid
              </p>
              <Link href={"/bid/detail"}>
                <Button
                  variant="outline"
                  className="w-full border-Terracotta text-Terracotta hover:bg-WarmWhite"
                >
                  Place Bid
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BiddingRoom;
