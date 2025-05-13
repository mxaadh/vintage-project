import Link from "next/link";

type BannersProps = {
  title: string;
  button: {
    btnTitle: string;
    link: string;
  };
};

const Banners = ({ title, button }: BannersProps) => {
  const { btnTitle, link } = button;
  return (
    <div>
      <section className="overflow-hidden bg-[url(/assets/images/banner/b13.jpeg)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              {title ? title : "Banners"}
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href={link ? link : "#"}
                className="inline-block rounded-full bg-accent px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500"
              >
                {btnTitle ? btnTitle : "Get Yours Today"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banners;
