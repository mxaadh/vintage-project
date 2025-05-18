import Button from "./Button";

type BannerThreeProps = {
  name: string;
};

const BannerThree = ({ name }: BannerThreeProps) => {
  return (
    <section className="overflow-hidden bg-[url(/assets/images/banner/b7-v1.jpg)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {name}
          </h2>

          <div className="mt-4 sm:mt-8 flex justify-center">
            <Button name={"Get Yours Today"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
