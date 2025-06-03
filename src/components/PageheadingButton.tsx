import React from "react";

interface PageHeadingButtonsProps {
  heading?: string;
  children?: React.ReactNode;
}

export default function PageHeadingButtons({
  heading,
  children,
}: PageHeadingButtonsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-2">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">{heading}</h1>
      </div>
      {children}
    </div>
  );
}
