import Image from "next/image";

const offers = () => {
  return (
    <div className="container flex flex-row flex-wrap justify-center items-center">
      <div>
        <Image
          src={"/assets/images/scrapyard/P8.webp"}
          alt=""
          width={800}
          height={100}
        />
      </div>
      <a href="#" className="block">
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Lorem, ipsum dolor.
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          reiciendis sequi ipsam incidunt.
        </p>
      </a>
    </div>
  );
};

export default offers;
