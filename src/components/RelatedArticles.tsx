import Image from "next/image";
import React from "react";

const RelatedArticles = () => {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-WarmBeige">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((index) => (
            <article key={index} className="max-w-xs">
              <a href="#">
                <Image
                  src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-${index}.png`}
                  className="mb-5 rounded-lg"
                  alt={`Image ${index}`}
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                <a href="#">
                  {index === 1 && "Our first office"}
                  {index === 2 && "Enterprise design tips"}
                  {index === 3 && "We partnered with Google"}
                  {index === 4 && "Our first project with React"}
                </a>
              </h2>
              <p className="mb-4 text-gray-500">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600  hover:no-underline"
              >
                {index === 1 && "Read in 2 minutes"}
                {index === 2 && "Read in 12 minutes"}
                {index === 3 && "Read in 8 minutes"}
                {index === 4 && "Read in 4 minutes"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RelatedArticles;
