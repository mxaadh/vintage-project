"use client"

import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, TrendingUp, DollarSign, Package, AlertCircle } from 'lucide-react';
import { getTopBidders } from '@/lib/api/bid';
import { ITopBidder } from '@/types';

const BidderLeaderboard = () => {
    const [bidders, setBidders] = useState<ITopBidder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopBidders = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await getTopBidders(10); // Get top 10 bidders

                if (response.success) {
                    setBidders(response.data);
                } else {
                    setError('Failed to fetch bidders data');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching top bidders:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTopBidders();
    }, []);

    const getRankIcon = (rank = 0) => {
        switch (rank) {
            case 1:
                return <Trophy className="w-6 h-6 text-yellow-500" />;
            case 2:
                return <Medal className="w-6 h-6 text-gray-400" />;
            case 3:
                return <Award className="w-6 h-6 text-amber-600" />;
            default:
                return <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold text-gray-600">{rank}</div>;
        }
    };

    const getRankColor = (rank = 0) => {
        switch (rank) {
            case 1:
                return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
            case 2:
                return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
            case 3:
                return 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200';
            default:
                return 'bg-white border-gray-200';
        }
    };

    const formatCurrency = (amount: string | number | bigint) => {
        // Convert string to number if needed
        const numericAmount = typeof amount === 'string' ? Number(amount) : amount;

        if (isNaN(Number(numericAmount))) return '$0';

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(numericAmount);
    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                    <div className="space-y-3">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-16 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                        <h3 className="text-red-800 font-semibold">Error Loading Data</h3>
                        <p className="text-red-600">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!bidders.length) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-gray-800 font-semibold mb-2">No Bidders Found</h3>
                    <p className="text-gray-600">There are no bidders to display at this time.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-full p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    Top Bidders Leaderboard
                </h1>
                <p className="text-gray-600">Rankings based on highest bid amounts and bidding activity</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Bidders</p>
                            <p className="text-2xl font-bold text-gray-900">{bidders.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Highest Single Bid</p>
                            <p className="text-2xl font-bold text-gray-900">{formatCurrency(Math.max(...bidders.map(b => b.highestBid)))}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Bids Placed</p>
                            <p className="text-2xl font-bold text-gray-900">{bidders.reduce((sum, b) => sum + b.totalBids, 0)}</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-900">Bidder Rankings</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left py-3 px-6 font-semibold text-gray-700">Rank</th>
                                <th className="text-left py-3 px-6 font-semibold text-gray-700">Bidder</th>
                                <th className="text-center py-3 px-6 font-semibold text-gray-700">Total Bids</th>
                                <th className="text-right py-3 px-6 font-semibold text-gray-700">Highest Bid</th>
                                <th className="text-right py-3 px-6 font-semibold text-gray-700">Total Amount</th>
                                <th className="text-right py-3 px-6 font-semibold text-gray-700">Average Bid</th>
                                <th className="text-center py-3 px-6 font-semibold text-gray-700">Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bidders.map((bidder, index) => (
                                <tr
                                    key={bidder.email || index}
                                    className={`border-b hover:bg-gray-50 transition-colors ${getRankColor(bidder.rank)}`}
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            {getRankIcon(bidder.rank)}
                                            <span className="font-bold text-lg">#{bidder.rank}</span>
                                        </div>
                                    </td>

                                    <td className="py-4 px-6">
                                        <div>
                                            <div className="font-semibold text-gray-900">{bidder.name}</div>
                                            <div className="text-sm text-gray-500">{bidder.email}</div>
                                        </div>
                                    </td>

                                    <td className="py-4 px-6 text-center">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {bidder.totalBids} {bidder.totalBids === 1 ? 'bid' : 'bids'}
                                        </span>
                                    </td>

                                    <td className="py-4 px-6 text-right">
                                        <div className="font-bold text-green-600 text-lg">
                                            {formatCurrency(bidder.highestBid)}
                                        </div>
                                    </td>

                                    <td className="py-4 px-6 text-right">
                                        <div className="font-semibold text-gray-900">
                                            {formatCurrency(bidder.totalBidAmount)}
                                        </div>
                                    </td>

                                    <td className="py-4 px-6 text-right">
                                        <div className="text-gray-600">
                                            {formatCurrency(bidder.averageBid)}
                                        </div>
                                    </td>

                                    <td className="py-4 px-6 text-center">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            {bidder.productsCount} {bidder.productsCount === 1 ? 'product' : 'products'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
                Last updated: {new Date().toLocaleString()}
            </div>
        </div>
    );
};

export default BidderLeaderboard;