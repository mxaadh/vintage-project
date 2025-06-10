"use client";

import Button from "@/components/Button";
import { getProductById } from "@/lib/api/product";
import { IProduct, IWishlistPayload, IWishlistResponse } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createWishlist } from "@/lib/api/bid";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

const Detail = () => {
  const { token } = useAuth()
  const params = useParams();
  const id = params?._id as string;
  const [idata, setIdata] = useState<IProduct>();
  const [email, setEmail] = useState<string>()
  const [loading, setLoading] = useState<boolean>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your actual API call for submission
      const formData: IWishlistPayload = {
        email,
        product: id,
      }
      const response: IWishlistResponse = await createWishlist(formData, token);

      // Example: if successful, redirect or show success message
      if (response.message) {
        console.log("Submission successful", response.message);
        alert("Thank you! We will notify you via email when the auction starts.");
      } else {
        throw new Error(response.message || "Something went wrong.");
      }
    } catch (error: unknown) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      setEmail("")
    }
  };


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

  return (
    <div>
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <h1 className="text-[40px] font-semibold text-CoffeeBrown">
                {idata?.title}
              </h1>
              {idata?.image && (
                <Image
                  className="w-full"
                  src={idata?.image}
                  alt="iMac Front"
                  width={500}
                  height={500}
                />
              )}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0 bg-MutedSand p-10 rounded-2xl">
              <h1 className="text-xl font-semibold text-slate-950a sm:text-2xl">
                Bid Starting From
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-slate-950a sm:text-3xl">
                  ${idata?.price}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          className="w-4 h-4 text-AntiqueGold"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                {/* <a
                  href="#"
                  title="Add to favorites"
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </a> */}

                {idata?.endDate ? (
                  <Link href={`/bid/detail/${id}`}>
                    <Button name={"Place a BID"} />
                  </Link>
                ) : (
                  <div className="p-6 space-y-4 w-full">
                    <div>
                      <label htmlFor="email" className="block text-xl font-semibold text-CoffeeBrown mb-1">
                        Enter your Email
                      </label>
                      <div className="flex justify-between items-center gap-2">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-CoffeeBrown"
                          placeholder="you@example.com"
                          required
                          readOnly={loading}
                        />
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-200 py-2 px-4 bg-Terracotta text-white font-semibold rounded-lg hover:bg-AntiqueGold transition duration-200 float-end flex justify-between items-center"
                          disabled={loading}
                        >
                          {loading && <Loader2 className="animate-spin mr-2" />}
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </div>

                )}
              </div>

              <hr className="my-6 md:my-8 border-gray-500" />

              <p className="mb-6 text-gray-600">{idata?.description}</p>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="text-gray-600 body-font py-12">
        <div className="container px-5 py-12 mx-auto">
          <h3 className="sm:text-5xl text-4xl font-bold title-font text-center text-gray-900 mb-20">
            Product Overview
            <br className="hidden sm:block" />
            <span className="sm:text-2xl text-3xl font-medium title-font text-center text-Terracotta mb-20">
              Reviews
            </span>
          </h3>
          <div className="flex flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex hover:bg-MutedSand/75 bg-MutedSand/50 rounded-2xl basis-1/3 mr-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-AntiqueGold/40 text-AntiqueGold mb-4 flex-shrink-0">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-AntiqueGold inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex hover:bg-MutedSand/75 bg-MutedSand/50 rounded-2xl basis-1/3 mr-4">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-AntiqueGold/40 text-AntiqueGold mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-AntiqueGold inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex hover:bg-MutedSand/75 bg-MutedSand/50 rounded-2xl basis-1/3">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-AntiqueGold/40 text-AntiqueGold mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-AntiqueGold inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="text-gray-600 body-font bg-MutedSand/50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h3 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
              Related Products
            </h3>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={"/assets/images/funniture/P06.jpg"}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  FURNITURE
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={"/assets/images/products/420.png"}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={"/assets/images/products/420.png"}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={"/assets/images/products/420.png"}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
