import Link from "next/link";

const BannersTwo = () => {
  return (
    <section className="overflow-hidden bg-[url(/assets/images/banner/b4.jpg)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-accent">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/category"
              className="block w-full rounded bg-accent px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-accent sm:w-auto"
            >
              Get Started
            </Link>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-accent shadow hover:text-rose-700 focus:outline-none focus:ring active:text-accent sm:w-auto"
            >
              Learn More
            </a>
          </div>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-accent px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-500"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersTwo;
