import { useAuth } from "@/context/AuthContext";
import { getBidsByProductId } from "@/lib/api/bid";
import { IBid, IBidResponse } from "@/types";
import { Crown } from "lucide-react";
import { useEffect, useState } from "react";

interface BidHistoryProps {
    id: string;
    counter: string;
}

const BidHistory = ({ id, counter }: BidHistoryProps) => {
    const { user } = useAuth();
    const [bids, setBids] = useState<IBidResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    // Generate stable pseudo-random numbers for each bid
    const generateStableUserId = (index: number): number => {
        // Using a simple hash function for consistency
        return 1000 + ((index * 7919) % 9000); // Generates IDs between 1000-9999
    };

    useEffect(() => {
        const fetchBids = async () => {
            try {
                setLoading(true);
                const res: IBidResponse = await getBidsByProductId(id);
                setBids(res);
            } catch (err) {
                setError("Failed to load bids");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBids();
            setInterval(() => fetchBids(), 100000)
        }
    }, [id]);

    if (loading) {
        return <div className="p-4 text-center">Loading bids...</div>;
    }

    if (error) {
        return <div className="p-4 text-center text-red-500">{error}</div>;
    }

    if (!bids?.data || 0) {
        return <div className="p-4 text-center">No bids yet</div>;
    }

    return (
        <ul className="divide-y divide-gray-200">
            {bids.data.map((bid: IBid, index: number) => (
                <li className="px-4 py-3 flex justify-between items-center" key={bid._id || index}>
                    <div>
                        {user && JSON.parse(user).isAdmin ? (
                            <div className="flex justify-between items-center gap-5">
                                <div>
                                    <span className="font-bold text-lg block">{bid.name}</span>
                                    <span className="text-gray-500 text-sm">{bid.email}</span>
                                </div>
                            </div>
                        ) : (
                            <span className="font-bold text-lg">{(JSON.parse(user).first_name === bid.name) ? bid.name : 'user'}-{generateStableUserId(index)}</span>
                        )}
                    </div>
                    {(index === 0) && (
                        <span className="text-yellow-500 text-2xl">{(counter === "00 : 00 : 00") && (
                            <i className="flex justify-between items-center gap-2">
                                <Crown />
                                <p>&quot;WINNER&quot;</p>
                            </i>
                        )}</span>
                    )}
                    <span className="font-bold text-lg text-green-600">
                        ${bid.bidAmount.toLocaleString()}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default BidHistory;