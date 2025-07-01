"use client";

import { useParams } from "next/navigation";
import ProductBidHistory from "@/components/ProductBidHistory";

const Page = () => {
    const params = useParams();
    const productId = params._id as string;

    return (
        <>
            <ProductBidHistory productId={productId} />
        </>
    );
};

export default Page;