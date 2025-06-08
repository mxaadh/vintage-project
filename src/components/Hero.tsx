import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[url(/assets/images/banner/B10.jpg)] bg-cover bg-center bg-no-repeat  ">
      <div className="absolute inset-0 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l bg-gradient-to-b from-Terracotta/50 to-CoffeeBrown/50 opacity-75"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="w-[643px] h-[443px] relative">
          <div
            className="w-[643px] h-[443px] left-0 top-0 absolute bg-MutedSand rounded-[10px]"
            style={{ marginLeft: "800px" }}
          />
          <div
            className="w-[561px] h-[344px] left-[39px] top-[62px] absolute"
            style={{ marginLeft: "800px" }}
          >
            <div className="w-[559px] h-[127px] left-[2px] top-[28px] absolute text-CharcoalBlack text-[52px] font-bold font-['Poppins'] leading-[65px]">
              Discover Timeless Vintage Treasures
            </div>
            <div className="w-[546px] h-[52px] left-[2px] top-[172px] absolute text-[#333333] text-lg font-medium font-['Poppins'] leading-normal">
              Explore our exclusive collection of handcrafted vintage pieces,
              carefully curated to bring character and charm into your space.
            </div>
            <Link href={"/bid"}>
              <div className="h-[74px] px-[72px] py-[25px] left-0 top-[270px] absolute bg-Terracotta border-2 justify-start items-start gap-2.5 inline-flex">
                <div className="text-WarmWhite text-base font-bold font-['Poppins'] uppercase">
                  BID NOW
                </div>
              </div>
            </Link>
            <div className="left-[2px] top-0 absolute text-CharcoalBlack text-base font-semibold font-['Poppins'] tracking-[3px]">
              New Arrival
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
