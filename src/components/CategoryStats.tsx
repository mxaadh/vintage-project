"use client";

import React, { useState, useEffect } from 'react';
import { BarChart3, Package, TrendingUp, Grid3X3, RefreshCw } from 'lucide-react';
import { ICategoryCounters, ICategoryCountersResponse } from '@/types';
import { getCategoryCounters } from '@/lib/api/product';

interface CategoryStatsProps {
    className?: string;
    onError?: (error: string) => void;
}

const CategoryStats: React.FC<CategoryStatsProps> = ({
    className = '',
    onError
}) => {
    const [stats, setStats] = useState<ICategoryCounters | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCategoryStats = async (): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            const response: ICategoryCountersResponse = await getCategoryCounters();

            if (response.success) {
                setStats(response.data);
            } else {
                throw new Error('Failed to fetch category statistics');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
            setError(errorMessage);
            onError?.(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchCategoryStats = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const response: ICategoryCountersResponse = await getCategoryCounters();

                if (response.success) {
                    setStats(response.data);
                } else {
                    throw new Error('Failed to fetch category statistics');
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                setError(errorMessage);
                onError?.(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryStats();
    }, [onError]);


    const getCategoryColor = (index: number): string => {
        const colors = [
            'bg-blue-500',
            'bg-green-500',
            'bg-purple-500',
            'bg-orange-500',
            'bg-pink-500',
            'bg-indigo-500',
            'bg-red-500',
            'bg-yellow-500',
            'bg-teal-500',
            'bg-cyan-500'
        ];
        return colors[index % colors.length];
    };

    const getMaxCount = (): number => {
        if (!stats?.categories) return 0;
        return Math.max(...Object.values(stats.categories));
    };

    const getTopCategory = (): string => {
        if (!stats?.categories) return 'N/A';
        const entries = Object.entries(stats.categories);
        if (entries.length === 0) return 'N/A';

        return entries.reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
    };

    const getAveragePerCategory = (): number => {
        if (!stats?.categories || !stats?.total) return 0;
        const categoryCount = Object.keys(stats.categories).length;
        return categoryCount > 0 ? Math.round(stats.total / categoryCount) : 0;
    };

    if (loading) {
        return (
            <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
                <div className="animate-pulse">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-24 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="h-16 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
                <div className="text-center text-red-600">
                    <Package className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">Error Loading Statistics</h3>
                    <p className="text-sm mb-4">{error}</p>
                    <button
                        onClick={fetchCategoryStats}
                        disabled={loading}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Retrying...' : 'Retry'}
                    </button>
                </div>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
                <div className="text-center text-gray-500 py-8">
                    <Package className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p>No statistics available</p>
                </div>
            </div>
        );
    }

    const categoryEntries = Object.entries(stats.categories);
    const maxCount = getMaxCount();

    return (
        <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-800">Category Statistics</h2>
                </div>
                <button
                    onClick={fetchCategoryStats}
                    disabled={loading}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 text-sm"
                >
                    <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-100 text-sm font-medium">Total Products</p>
                            <p className="text-3xl font-bold">{stats.total.toLocaleString()}</p>
                        </div>
                        <Package className="h-8 w-8 text-blue-200" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 text-sm font-medium">Categories</p>
                            <p className="text-3xl font-bold">{categoryEntries.length}</p>
                        </div>
                        <Grid3X3 className="h-8 w-8 text-green-200" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-100 text-sm font-medium">Top Category</p>
                            <p className="text-xl font-bold truncate">{getTopCategory()}</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-purple-200" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-lg text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-orange-100 text-sm font-medium">Avg per Category</p>
                            <p className="text-3xl font-bold">{getAveragePerCategory()}</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-orange-200" />
                    </div>
                </div>
            </div>

            {/* Category Breakdown */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Breakdown</h3>
                <div className="space-y-3">
                    {categoryEntries
                        .sort(([, a], [, b]) => b - a)
                        .map(([category, count], index) => {
                            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
                            const sharePercentage = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;

                            return (
                                <div key={category} className="flex items-center space-x-4">
                                    <div className="w-28 text-sm font-medium text-gray-700 truncate" title={category}>
                                        {category}
                                    </div>
                                    <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                                        <div
                                            className={`h-full ${getCategoryColor(index)} transition-all duration-700 ease-out rounded-full`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <div className="w-16 text-right">
                                        <span className="text-lg font-bold text-gray-800">{count.toLocaleString()}</span>
                                    </div>
                                    <div className="w-12 text-right text-sm text-gray-500 font-medium">
                                        {sharePercentage}%
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {categoryEntries.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                    <Package className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p>No category data available</p>
                </div>
            )}
        </div>
    );
};

export default CategoryStats;