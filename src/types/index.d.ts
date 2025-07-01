import { JSX } from "react";

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  dob: string; // ISO format or string date
  gender: "male" | "female" | string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  __v: number;
}

export interface IUserResponse {
  user: IUser;
  token: string;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

// Product Data
// Define the payload structure you send to create or update a product
export interface IProduct {
  _id: string;
  title: string;
  image: string;
  description?: string;
  brand?: string;
  category?: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  endDate?: string;
  endHour?: string;
  endMinute?: string;
}

export interface IProductResponse {
  map(
    arg0: (product: IProduct, i: string) => JSX.Element
  ): import("react").ReactNode;
  data: IProduct[];
}

export interface IProductPayload {
  title: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  price: number;
  countInStock?: number;
  endDate?: string;
  endHour?: string;
  endMinute?: string;
}

export interface IProductPayloadWithToken {
  data: IProductPayload;
  token: string;
}

// Bid
export interface IBid {
  // map(
  //   arg0: (bid: IBid, index: number) => JSX.Element
  // ): import("react").ReactNode;
  _id: string;
  name: string;
  email: string;
  product: string;
  bidAmount: number;
}

export interface IBidResponse {
  data: IBid[];
}

export interface IBidPayload {
  name: string;
  email: string;
  product: string;
  bidAmount: number;
}

export interface IWishlistPayload {
  email: string;
  product: string;
}

export interface IWishlistResponse {
  message: string;
}

// Types for category counters
export interface ICategoryCounters {
  total: number;
  categories: Record<string, number>;
}

export interface ICategoryCountersResponse {
  success: boolean;
  data: ICategoryCounters;
}

// Added to src/types/index.d.ts
export interface ITopBidder {
  rank: number;
  name: string;
  email: string;
  totalBids: number;
  highestBid: number;
  totalBidAmount: number;
  averageBid: number;
  productsCount: number;
}

export interface ITopBiddersResponse {
  success: boolean;
  data: ITopBidder[];
}

export interface IProductBid {
  rank: number;
  name: string;
  email: string;
  bidAmount: number;
  bidDate: string;
  bidTime: string;
}

export interface IProductBidsResponse {
  success: boolean;
  product: string;
  totalBids: number;
  data: IProductBid[];
}

// Base bid interface
export interface IBid {
  id: string;
  name: string;
  email: string;
  bidAmount: number;
  createdAt: string;
  updatedAt: string;
}

// Bid payload for creating new bids
export interface IBidPayloadWithProductI {
  name: string;
  email: string;
  bidAmount: number;
  productId: string;
}

// Individual bid response
export interface IBidResponse2 {
  success: boolean;
  message?: string;
  data: IBid;
}

// Product bid for table display
export interface IProductBid {
  sno: number;
  name: string;
  email: string;
  product: string;
  bidAmount: number;
  bidDate: string;
  bidTime: string;
}

// Grouped bids by product
export interface IGroupedProductBids {
  bids: IBid[];
  totalBids: number;
  highestBid: number;
  lowestBid: number;
  product: string;
  averageBid: number;
}

// Summary statistics
export interface IBiddingSummary {
  totalProducts: number;
  totalBids: number;
  overallHighestBid: number;
  overallLowestBid: number;
}

// Complete bidding dashboard data
export interface IBiddingDashboardData {
  grouped: IGroupedProductBids[];
  table: IProductBid[];
  summary: IBiddingSummary;
}

// Main dashboard response
export interface IBiddingDashboardResponse {
  success: boolean;
  data: IBiddingDashboardData;
}

// Product bids response (for individual product)
export interface IProductBidsResponse {
  success: boolean;
  product: string;
  totalBids: number;
  data: IProductBid[];
}

// Top bidders interface
export interface ITopBidder {
  id: string;
  name: string;
  email: string;
  totalBids: number;
  totalAmount: number;
  averageBid: number;
  highestBid: number;
}

// Top bidders response
export interface ITopBiddersResponse {
  success: boolean;
  data: ITopBidder[];
  limit?: number;
}

// Wishlist interfaces
export interface IWishlistPayload {
  product?: string;
  productId?: string;
  userId?: string;
  email: string;
  name?: string;
}

export interface IWishlistItem {
  id: string;
  productId: string;
  userId?: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IWishlistResponse {
  success: boolean;
  message?: string;
  data: IWishlistItem;
}

// Product interface (basic)
export interface IProduct {
  id: string;
  name: string;
  description?: string;
  startingPrice?: number;
  currentHighestBid?: number;
  endDate?: string;
  status?: "active" | "ended" | "pending";
}

// Enhanced product with bidding stats
export interface IProductWithBids extends IProduct {
  totalBids: number;
  highestBid: number;
  lowestBid: number;
  averageBid: number;
  recentBids: IBid[];
}

// API Error interface
export interface IApiError {
  success: false;
  message: string;
  errors?: string[];
  statusCode?: number;
}

// Generic API Response wrapper
export interface IApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// Pagination interface
export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Paginated response
export interface IPaginatedResponse<T = unknown> extends IApiResponse<T[]> {
  pagination: IPagination;
}

// Filter and sort options for bids
export interface IBidFilters {
  productId?: string;
  minAmount?: number;
  maxAmount?: number;
  dateFrom?: string;
  dateTo?: string;
  bidderName?: string;
  bidderEmail?: string;
}

export interface IBidSortOptions {
  sortBy: "bidAmount" | "createdAt" | "name";
  sortOrder: "asc" | "desc";
}

// Bid query parameters
export interface IBidQueryParams extends IBidFilters, IBidSortOptions {
  page?: number;
  limit?: number;
}

// Statistics interfaces
export interface IBidStatistics {
  totalBids: number;
  totalValue: number;
  averageBid: number;
  medianBid: number;
  uniqueBidders: number;
  activeProducts: number;
}

export interface IProductStatistics {
  productId: string;
  productName?: string;
  totalBids: number;
  highestBid: number;
  lowestBid: number;
  averageBid: number;
  uniqueBidders: number;
  bidRange: number;
  competitiveness: "low" | "medium" | "high";
}

// Real-time updates
export interface IBidUpdate {
  type: "new_bid" | "bid_updated" | "product_ended";
  productId: string;
  bid?: IBid;
  timestamp: string;
}

// User bidding activity
export interface IUserBiddingActivity {
  userId?: string;
  email: string;
  name: string;
  totalBids: number;
  totalAmount: number;
  averageBid: number;
  highestBid: number;
  activeBids: number;
  wonAuctions: number;
  participatedProducts: string[];
}

// Auction status
export type AuctionStatus =
  | "upcoming"
  | "active"
  | "ending_soon"
  | "ended"
  | "cancelled";

// Enhanced product for auction management
export interface IAuctionProduct extends IProduct {
  startDate: string;
  endDate: string;
  status: AuctionStatus;
  reservePrice?: number;
  buyNowPrice?: number;
  bidIncrement: number;
  totalBids: number;
  uniqueBidders: number;
  currentHighestBid: number;
  currentHighestBidder?: {
    name: string;
    email: string;
  };
  isReserveMet: boolean;
  timeRemaining?: number;
}
