import { useAuth } from "@/context/AuthContext";
import { getBidsByProductId } from "@/lib/api/bid";
import { IBid, IBidResponse } from "@/types";
import { useEffect, useState } from "react";

interface BidHistoryProps {
    id: string;
}

const BidHistory = ({ id }: BidHistoryProps) => {
    const { user } = useAuth();
    const [bids, setBids] = useState<IBidResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBids = async () => {
        try {
            setLoading(true);
            const result = await getBidsByProductId(id);
            setBids(result);
        } catch (err) {
            setError("Failed to load bids");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Generate stable pseudo-random numbers for each bid
    const generateStableUserId = (index: number): number => {
        // Using a simple hash function for consistency
        return 1000 + ((index * 7919) % 9000); // Generates IDs between 1000-9999
    };

    useEffect(() => {
        if (id) {
            fetchBids();
        }
    }, [id]);

    if (loading) {
        return <div className="p-4 text-center">Loading bids...</div>;
    }

    if (error) {
        return <div className="p-4 text-center text-red-500">{error}</div>;
    }

    if (!bids?.data?.length) {
        return <div className="p-4 text-center">No bids yet</div>;
    }

    return (
        <ul className="divide-y divide-gray-200">
            {bids.data.map((bid: IBid, index: number) => (
                <li className="px-4 py-3 flex justify-between items-center" key={bid._id || index}>
                    <div>
                        {user && JSON.parse(user).isAdmin ? (
                            <div>
                                <span className="font-bold text-lg block">{bid.name}</span>
                                <span className="text-gray-500 text-sm">{bid.email}</span>
                            </div>
                        ) : (
                            <span className="font-bold text-lg">user-{generateStableUserId(index)}</span>
                        )}
                    </div>
                    <span className="font-bold text-lg text-green-600">
                        ${bid.bidAmount.toLocaleString()}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default BidHistory;