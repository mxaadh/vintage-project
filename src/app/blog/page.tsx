import BannerThree from "@/components/BannersThree";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="bg-white">
      <BannerThree name={"Blog"} />
      <div className="max-w-fit mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            {/* Blog Card Start */}
            {[
              {
                title: "Less is Truly More in Modern Design",
                desc: `In today's fast-paced world, a sense of calm and clarity is increasingly valued...`,
                img: "/assets/images/banner/b11.jpeg",
              },
              {
                title: "Connecting with Nature Indoors",
                desc: `Humans have an innate connection to nature, and biophilic design seeks to bring the outdoors in...`,
                img: "/assets/images/banner/b12.jpeg",
              },
              {
                title: "Injecting Personality into Design",
                desc: `While minimalism and natural elements are popular, there's also a strong movement towards embracing individuality...`,
                img: "/assets/images/banner/b13.jpeg",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <Image
                  src={item.img}
                  alt="blog"
                  width={1200}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="flex gap-4 text-sm text-Terracotta font-poppins">
                  <span>Admin</span>
                  <span>14 Oct 2022</span>
                  <span>Wood</span>
                </div>
                <h2 className="text-3xl font-medium text-CoffeeBrown font-poppins">
                  {item.title}
                </h2>
                <p className="text-[15px] text-Terracotta font-poppins text-justify">
                  {item.desc}
                </p>
                <Link
                  href="#"
                  className="inline-block border border-AntiqueGold text-AntiqueGold px-6 py-3 mt-4 rounded hover:bg-WarmWhite"
                >
                  Show More
                </Link>
              </div>
            ))}
            {/* Blog Card End */}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Search + Categories */}
            <div className="bg-MutedSand/75 p-6 rounded-2xl">
              <div className="relative mb-8">
                <input
                  className="w-full h-14 pl-4 pr-10 rounded-[10px] border border-[#9f9f9f] bg-white"
                  placeholder="Search Blogs"
                />
                <BsSearch
                  className="absolute top-4 right-4 text-slate-950"
                  size={20}
                />
              </div>
              <h2 className="text-Terracotta text-3xl font-bold mb-6 font-poppins">
                Categories
              </h2>
              {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
                (cat, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="block text-2xl text-Terracotta hover:text-AntiqueGold font-poppins mb-2"
                  >
                    {cat}
                  </Link>
                )
              )}
            </div>

            {/* Recent Posts */}
            <div className="bg-MutedSand/75 p-6 rounded-2xl">
              <h2 className="text-Terracotta text-3xl font-bold mb-6 font-poppins">
                Recent Posts
              </h2>
              {[
                "Going all-in with millennial design",
                "Exploring new ways of decorating",
                "Handmade pieces that took time to make",
              ].map((title, i) => (
                <div key={i} className="flex gap-4 mb-4 items-center">
                  <Image
                    src="/assets/images/blog/1.png"
                    alt="thumbnail"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm text-black font-poppins">{title}</p>
                    <span className="text-xs text-Terracotta">03 Aug 2022</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
