import Image from "next/image";
import Link from "next/link";

type BannersOneProps = {
  image: string;
  title: string;
  button: {
    btnTitle: string;
    link: string;
  };
};

const BannersOne = ({ image, title, button } : BannersOneProps) => {
  const { btnTitle, link } = button;
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-8">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title
              ? title
              : "Lorem, ipsum dolor sit amet consectetur adipisicing elit"}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href={link}
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {btnTitle ? btnTitle : "Get Started Today"}
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={image}
        alt=""
        className="object-cover"
        width={700}
        height={20}
      />
    </section>
  );
};

export default BannersOne;
