import BannerThree from "@/components/BannersThree";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="bg-white">
      <BannerThree name={"Blog"} />
      <div className="container mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            {/* Blog Start */}
            <div className="w-[820px] h-[794px] relative">
              <div className="left-[3px] top-[556px] absolute text-CoffeeBrown text-3xl font-medium font-['Poppins']">
                Less is Truly More in Modern Design
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-Terracotta text-[15px] font-normal font-['Poppins'] leading-snug">
                In todays fast-paced world, a sense of calm and clarity is
                increasingly valued. This translates beautifully into the realm
                of design, where minimalism has taken center stage. Far from
                being stark or empty, minimalist design embraces simplicity,
                clean lines, and a focus on functionality. Its about
                intentionally stripping away the unnecessary to highlight the
                beauty of essential elements. Think of a thoughtfully curated
                space with a few impactful pieces, or a website with intuitive
                navigation and ample white space. This approach not only creates
                a visually appealing aesthetic but also promotes a sense of
                peace and focus.
                <div className="w-10 h-12 mt-8 top-100 ml-[480px]">
                  <Link
                    href={`#`}
                    className="w-[245px] h-12 left-0 top-0 absolute bg-WarmWhite border border-AntiqueGold"
                  >
                    <div className="left-[82px] top-[12px] absolute text-AntiqueGold text-base font-semibold font-['Poppins'] leading-normal">
                      Show More
                    </div>
                  </Link>
                </div>
              </div>
              <Image
                className="w-[817px] h-[500px] left-[3px] top-0 absolute rounded-[10px]"
                src={"/assets/images/banner/b11.jpeg"}
                width={817}
                height={500}
                alt="image"
              />
              <div className="w-[349px] h-6 left-0 top-[517px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute">
                  <div className="left-[27px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    14 Oct 2022
                  </div>
                  <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
              </div>
            </div>
            {/* Blog End */}
            {/* Blog Start */}
            <div className="w-[820px] h-[794px] relative">
              <div className="left-[3px] top-[556px] absolute text-CoffeeBrown text-3xl font-medium font-['Poppins']">
                Connecting with Nature Indoors
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-Terracotta text-[15px] font-normal font-['Poppins'] leading-snug">
                Humans have an innate connection to nature, and biophilic design
                seeks to bring the outdoors in. This trend is gaining
                significant traction as we recognize the positive impact of
                natural elements on our well-being. Incorporating natural light,
                ventilation, plants, and organic materials like wood and stone
                can transform a space into a more calming and inspiring
                environment. Imagine a workspace filled with lush greenery, or a
                living room with large windows showcasing natural views.
              </div>
              <Image
                className="w-[817px] h-[500px] left-[3px] top-0 absolute rounded-[10px]"
                src={"/assets/images/banner/b12.jpeg"}
                width={817}
                height={500}
                alt="image"
              />
              <div className="w-[349px] h-6 left-0 top-[517px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute">
                  <div className="left-[27px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    14 Oct 2022
                  </div>
                  <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
              </div>
              <div className="w-[89px] h-9 left-[3px] top-[758px] absolute">
                <div className="left-0 top-0 absolute text-justify text-black text-base font-normal font-['Poppins']">
                  Read more
                </div>
                <div className="w-[77px] h-[0px] left-[6px] top-[36px] absolute border border-black"></div>
              </div>
            </div>
            {/* Blog End */}
            {/* Blog Start */}
            <div className="w-[820px] h-[794px] relative">
              <div className="left-[3px] top-[556px] absolute text-CoffeeBrown text-3xl font-medium font-['Poppins']">
                Injecting Personality into Design
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-Terracotta text-[15px] font-normal font-['Poppins'] leading-snug">
                While minimalism and natural elements are popular, theres also a
                strong movement towards embracing individuality through bold
                colors and playful patterns. Design is a powerful tool for
                self-expression, and incorporating vibrant hues and interesting
                motifs can inject energy and personality into any space or
                visual. Think of unexpected color pairings in interior design,
                or a website that uses dynamic patterns to create a memorable
                user experience. This approach allows for creativity and can
                evoke a sense of joy and excitement.
              </div>
              <Image
                className="w-[817px] h-[500px] left-[3px] top-0 absolute rounded-[10px]"
                src={"/assets/images/banner/b13.jpeg"}
                width={817}
                height={500}
                alt="image"
              />
              <div className="w-[349px] h-6 left-0 top-[517px] absolute">
                <div className="w-20 h-6 left-0 top-0 absolute">
                  <div className="left-[27px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-Terracotta text-base font-normal font-['Poppins']">
                    14 Oct 2022
                  </div>
                  <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
              </div>
              <div className="w-[89px] h-9 left-[3px] top-[758px] absolute">
                <div className="left-0 top-0 absolute text-justify text-black text-base font-normal font-['Poppins']">
                  Read more
                </div>
                <div className="w-[77px] h-[0px] left-[6px] top-[36px] absolute border border-black"></div>
              </div>
            </div>
            {/* Blog End */}
          </div>
          <div className="">
            <div className="w-[393px] h-[537px] relative bg-MutedSand/75 rounded-2xl">
              <div className="w-[251px] h-[353px] left-[77px] top-[123px] absolute ">
                <h2 className="left-0 top-0 absolute text-Terracotta text-4xl font-bold font-['Poppins']">
                  Categories
                </h2>
                <Link
                  href={"#"}
                  className="left-0 top-[69px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']"
                >
                  <p className="text-center">
                    Crafts
                    {/* <span className="left-[240px] top-[69px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']">
                      2
                    </span> */}
                  </p>
                </Link>
                <Link
                  href={"#"}
                  className="left-0 top-[134px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']"
                >
                  <p>
                    Design
                    {/* <span className="left-[240px] top-[134px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']">
                      8
                    </span> */}
                  </p>
                </Link>
                <Link
                  href={"#"}
                  className="left-0 top-[199px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']"
                >
                  <p>
                    Handmade
                    {/* <span className="left-[240px] top-[199px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']">
                      7
                    </span> */}
                  </p>
                </Link>
                <Link
                  href={"#"}
                  className="left-0 top-[264px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']"
                >
                  <p>
                    Interior
                    {/* <span className="left-[240px] top-[264px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']">
                      1
                    </span> */}
                  </p>
                </Link>
                <Link
                  href={"#"}
                  className="left-0 top-[329px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']"
                >
                  <p>
                    Wood
                    {/* <span className="left-[240px] top-[329px] absolute text-Terracotta hover:text-AntiqueGold text-2xl font-['Poppins']">
                      6
                    </span> */}
                  </p>
                </Link>
              </div>
              <div className="w-[311px] h-[58px] left-[41px] top-[22px] absolute">
                <input
                  className="w-[311px] h-[58px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#9f9f9f] p-4"
                  placeholder="Search Blogs"
                />
                <BsSearch
                  className="absolute top-0 right-0 mr-4 mt-5 text-slate-950"
                  size={20}
                />
              </div>
            </div>

            <div className="w-[393px] h-[600px] relative bg-MutedSand/75 rounded-2xl mt-20">
              <div className="w-[252px] h-[618px] left-[76px] top-[16px] absolute">
                <h2 className="left-0 top-0 absolute text-Terracotta text-4xl font-bold font-['Poppins'] mt-4">
                  Recent Posts
                </h2>
                <div className="w-[211px] h-20 left-0 top-[62px] absolute">
                  <div className="w-[119px] h-[65px] left-[92px] top-[8px] absolute">
                    <div className="w-[119px] left-0 top-0 absolute text-black text-sm font-normal font-['Poppins']">
                      Going all-in with millennial design
                    </div>
                    <div className="w-[119px] left-0 top-[47px] absolute text-Terracotta text-xs font-normal font-['Poppins']">
                      03 Aug 2022
                    </div>
                  </div>
                  <Image
                    className="w-20 h-20 left-0 top-0 absolute rounded-[10px]"
                    src={"/assets/images/blog/1.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                </div>
                <div className="w-[241px] h-20 left-0 top-[181px] absolute">
                  <div className="w-[149px] h-[65px] left-[92px] top-[8px] absolute">
                    <div className="w-[149px] left-0 top-0 absolute text-black text-sm font-normal font-['Poppins']">
                      Exploring new ways of decorating
                    </div>
                    <div className="w-[119px] left-0 top-[47px] absolute text-Terracotta text-xs font-normal font-['Poppins']">
                      03 Aug 2022
                    </div>
                  </div>
                  <Image
                    className="w-20 h-20 left-0 top-0 absolute rounded-[10px]"
                    src={"/assets/images/blog/1.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                </div>
                <div className="w-[252px] h-20 left-0 top-[300px] absolute">
                  <div className="w-40 h-[65px] left-[92px] top-[8px] absolute">
                    <div className="w-40 left-0 top-0 absolute text-black text-sm font-normal font-['Poppins']">
                      Handmade pieces that took time to make
                    </div>
                    <div className="w-[119px] left-0 top-[47px] absolute text-Terracotta text-xs font-normal font-['Poppins']">
                      03 Aug 2022
                    </div>
                  </div>
                  <Image
                    className="w-20 h-20 left-0 top-0 absolute rounded-[10px]"
                    src={"/assets/images/blog/1.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                </div>
                <div className="w-[211px] h-20 left-0 top-[419px] absolute">
                  <div className="w-[119px] h-[65px] left-[92px] top-[8px] absolute">
                    <div className="w-[119px] left-0 top-0 absolute text-black text-sm font-normal font-['Poppins']">
                      Modern home in Milan
                    </div>
                    <div className="w-[119px] left-0 top-[47px] absolute text-Terracotta text-xs font-normal font-['Poppins']">
                      03 Aug 2022
                    </div>
                  </div>
                  <Image
                    className="w-20 h-20 left-0 top-0 absolute rounded-[10px]"
                    src={"/assets/images/blog/1.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
