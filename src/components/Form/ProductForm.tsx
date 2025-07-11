"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { IProductPayload, IProduct } from "@/types/";
import { uploadImage } from "@/lib/api/upload";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFormProps {
  initialData?: IProduct;
  onSubmit: (data: IProductPayload) => void;
  isSubmitting?: boolean;
}

export default function ProductForm({
  initialData,
  onSubmit,
  isSubmitting = false,
}: ProductFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    image: initialData?.image || "",
    description: initialData?.description || "",
    brand: initialData?.brand || "",
    category: initialData?.category || "",
    price: initialData?.price?.toString() || "",
  });
  const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;
  console.log(backendHost, "<< backendHost env");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        image: initialData.image || "",
        description: initialData.description || "",
        brand: initialData.brand || "",
        category: initialData.category || "",
        price: initialData.price?.toString() || "",
      });
    }
  }, [initialData]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      uploadImage(file)
        .then((data) => {
          const fullPath = backendHost + data.path;
          setFormData((prev) => ({
            ...prev,
            image: fullPath,
          }));
        })
        .catch((error) => {
          console.error("Upload failed:", error);
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.price || isNaN(Number(formData.price)))
      newErrors.price = "Valid price is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const payload = {
      ...formData,
      price: Number(formData.price),
    };

    // console.log(payload, "<< payload");
    onSubmit(payload);
  };

  return (
    <Card className="max-w-5xl mx-auto">
      <CardContent className="p-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="title">
              Title
            </Label>
            <Input
              className="border-2 border-black"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Product title"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="image">
              Image URL {formData.image && `(${formData.image})`}
            </Label>
            <Input
              className="border-2 border-black "
              id="image"
              name="image"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="border-2 border-black "
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product description"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="brand">
              Brand
            </Label>
            <Input
              className="border-2 border-black "
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Brand name"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="category">
              Category
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) => {
                setFormData((prev) => ({ ...prev, category: value }));
              }}
            >
              <SelectTrigger className="w-full border-2 border-black">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="Creative">Creative</SelectItem>
                  <SelectItem value="Heritage">Heritage</SelectItem>
                  <SelectItem value="Scrapyard">Scrapyard</SelectItem>
                  <SelectItem value="Furniture">Furniture</SelectItem>
                  <SelectItem value="Vehicle">Vehicle</SelectItem>
                  <SelectItem value="Decorative">Decorative</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl" htmlFor="price">
              Price
            </Label>
            <Input
              className="border-2 border-black "
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">{errors.price}</p>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className="w-[240px] flex justify-center bg-Terracotta  hover:bg-AntiqueGold text-MutedSand p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
