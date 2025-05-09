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
              <div className="left-[3px] top-[556px] absolute text-black text-3xl font-medium font-['Poppins']">
                Going all-in with millennial design
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-[#9f9f9f] text-[15px] font-normal font-['Poppins'] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
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
                  <div className="left-[27px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
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
              <div className="left-[3px] top-[556px] absolute text-black text-3xl font-medium font-['Poppins']">
                Going all-in with millennial design
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-[#9f9f9f] text-[15px] font-normal font-['Poppins'] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
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
                  <div className="left-[27px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
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
              <div className="left-[3px] top-[556px] absolute text-black text-3xl font-medium font-['Poppins']">
                Going all-in with millennial design
              </div>
              <div className="w-[817px] left-[3px] top-[613px] absolute text-justify text-[#9f9f9f] text-[15px] font-normal font-['Poppins'] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
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
                  <div className="left-[27px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Admin
                  </div>
                  <div className="w-5 h-5 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[78px] h-6 left-[271px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                    Wood
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                </div>
                <div className="w-[121px] h-6 left-[115px] top-0 absolute">
                  <div className="left-[31px] top-0 absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
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
                    <div className="w-[119px] left-0 top-[47px] absolute text-[#9f9f9f] text-xs font-normal font-['Poppins']">
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
                    <div className="w-[119px] left-0 top-[47px] absolute text-[#9f9f9f] text-xs font-normal font-['Poppins']">
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
                    <div className="w-[119px] left-0 top-[47px] absolute text-[#9f9f9f] text-xs font-normal font-['Poppins']">
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
                    <div className="w-[119px] left-0 top-[47px] absolute text-[#9f9f9f] text-xs font-normal font-['Poppins']">
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
