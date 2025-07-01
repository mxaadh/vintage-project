"use client";

import React, { useState, useEffect } from "react";
import { getBidsByProduct } from "@/lib/api/bid";
import { IProductBid } from "@/types";

interface ProductBidHistoryProps {
    productId: string;
}

const ProductBidHistory: React.FC<ProductBidHistoryProps> = ({ productId }) => {
    const [bids, setBids] = useState<IProductBid[]>([]);
    const [totalBids, setTotalBids] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBids = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getBidsByProduct(productId);

                if (response.success && response.data) {
                    setBids(response.data);
                    setTotalBids(response.totalBids);
                } else {
                    setError("Failed to fetch bid history");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchBids();
        }
    }, [productId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <span className="ml-2">Loading bid history...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-red-700">Error: {error}</p>
            </div>
        );
    }

    if (!bids || bids.length === 0) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
                <p className="text-gray-600">No bids found for this product</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Product Bid History</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bidder
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date & Time
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bids.map((bid, index) => (
                                <tr key={`${bid.email}-${bid.rank}-${index}`} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${bid.rank === 1 ? 'bg-yellow-500' :
                                                    bid.rank === 2 ? 'bg-gray-400' :
                                                        bid.rank === 3 ? 'bg-orange-600' :
                                                            'bg-blue-500'
                                                }`}>
                                                {bid.rank}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {bid.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {bid.email}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-green-600">
                                            ${bid.bidAmount.toLocaleString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {bid.bidDate} <br />
                                        <span className="text-xs">
                                            {bid.bidTime}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                Total Bids: {totalBids}
                {bids.length > 0 && (
                    <>
                        {" | "}Highest Bid: ${Math.max(...bids.map(b => b.bidAmount)).toLocaleString()}
                        {" | "}Lowest Bid: ${Math.min(...bids.map(b => b.bidAmount)).toLocaleString()}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductBidHistory;