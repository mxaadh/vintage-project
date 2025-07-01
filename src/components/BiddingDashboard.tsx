"use client";

import React, { useState, useEffect } from 'react';
import {
    ChevronDown, ChevronUp, TrendingUp, Users, Package, DollarSign, Loader2, AlertCircle
} from 'lucide-react';
import { IBiddingDashboardResponse } from "@/types";
import { getBidsGroupedByProduct } from '@/lib/api/bid';

const BiddingDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
    const [data, setData] = useState<IBiddingDashboardResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getBidsGroupedByProduct();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatCurrency = (amount: string | number | bigint) => {
        const numericAmount = typeof amount === 'string' ? Number(amount) : amount;
        if (isNaN(Number(numericAmount))) return '$0';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(numericAmount);
    };

    const getProductName = (productId: string) => {
        if (productId === 'id') return 'Premium Product';
        return `Product ${productId.slice(-4)}`;
    };

    interface IStatCard {
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        value: string | number;
        subtitle: string;
        color: string;
    }

    const StatCard = ({ icon: Icon, title, value, subtitle, color }: IStatCard) => (
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className={`text-2xl font-bold ${color}`}>{value}</p>
                    {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
                </div>
                {Icon && (
                    <div className="p-3 bg-blue-50 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                )}
            </div>
        </div>
    );

    interface IBid {
        id?: string;
        name: string;
        email: string;
        bidAmount: number;
        createdAt: string | Date;
    }

    interface IProduct {
        product: string;
        highestBid: number;
        totalBids: number;
        averageBid: number;
        lowestBid: number;
        bids: IBid[];
    }

    interface IProductCard {
        product: IProduct;
        index: string;
        expandedProduct: string | null;
        setExpandedProduct: (index: string | null) => void;
    }

    const ProductCard = ({ product, index, expandedProduct, setExpandedProduct }: IProductCard) => (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {getProductName(product.product)}
                    </h3>
                    <p className="text-sm text-gray-500">ID: {product.product}</p>
                </div>
                <button
                    onClick={() => setExpandedProduct(expandedProduct === index ? null : index)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    {expandedProduct === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-600 font-medium">Highest Bid</p>
                    <p className="text-lg font-bold text-green-800">{formatCurrency(product.highestBid)}</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-600 font-medium">Total Bids</p>
                    <p className="text-lg font-bold text-blue-800">{product.totalBids}</p>
                </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Avg: {formatCurrency(product.averageBid)}</span>
                <span>Range: {formatCurrency(product.lowestBid)} - {formatCurrency(product.highestBid)}</span>
            </div>

            {expandedProduct === index && (
                <div className="mt-4 border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Recent Bids</h4>
                    <div className="space-y-2">
                        {product.bids.map((bid, bidIndex) => (
                            <div key={bid.id || bidIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{bid.name}</p>
                                    <p className="text-xs text-gray-500">{bid.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{formatCurrency(bid.bidAmount)}</p>
                                    <p className="text-xs text-gray-500">{new Date(bid.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    // Conditional rendering
    if (loading) {
        return (
            <div className="min-h-screen bg-white p-6 flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white p-6 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Data</h3>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!data || !data.success) {
        return (
            <div className="min-h-screen bg-white p-6 flex items-center justify-center">
                <div className="text-center">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Data Available</h3>
                    <p className="text-gray-600">No bidding data found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Bidding Dashboard</h1>
                <p className="text-gray-600">Monitor and analyze bidding activity across all products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon={Package} title="Total Products" value={data.data.summary.totalProducts} subtitle="Active auctions" color="text-blue-600" />
                <StatCard icon={Users} title="Total Bids" value={data.data.summary.totalBids} subtitle="All-time bids" color="text-green-600" />
                <StatCard icon={TrendingUp} title="Highest Bid" value={formatCurrency(data.data.summary.overallHighestBid)} subtitle="Premium product lead" color="text-emerald-600" />
                <StatCard icon={DollarSign} title="Lowest Bid" value={formatCurrency(data.data.summary.overallLowestBid)} subtitle="Entry point" color="text-orange-600" />
            </div>

            <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                    Product Overview
                </button>
                <button
                    onClick={() => setActiveTab('table')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'table' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                    All Bids
                </button>
            </div>

            {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.data.grouped.map((product, index) => (
                        <ProductCard
                            key={product.product}
                            product={product}
                            index={index.toString()}
                            expandedProduct={expandedProduct}
                            setExpandedProduct={setExpandedProduct}
                        />
                    ))}
                </div>
            )}

            {activeTab === 'table' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">All Bids</h2>
                        <p className="text-sm text-gray-600">Complete bidding history across all products</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bidder</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.data.table.map((bid) => (
                                    <tr key={bid.sno} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bid.sno}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{bid.name}</div>
                                            <div className="text-sm text-gray-500">{bid.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{getProductName(bid.product)}</div>
                                            <div className="text-sm text-gray-500">{bid.product}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-lg font-bold text-green-600">{formatCurrency(bid.bidAmount)}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div>{bid.bidDate}</div>
                                            <div>{bid.bidTime}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BiddingDashboard;
