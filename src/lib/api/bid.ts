import {
  IBid,
  IBidPayload,
  IBidResponse,
  IProductBidsResponse,
  ITopBiddersResponse,
  IWishlistPayload,
  IWishlistResponse,
  IBiddingDashboardResponse,
  IApiError,
} from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Helper function to handle API errors
const handleApiError = async (response: Response): Promise<never> => {
  const error: IApiError = await response.json();
  throw new Error(error.message || "An unexpected error occurred");
};

// GET / - Get all bids
export async function getBids(): Promise<IBidResponse> {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const res = await fetch(`${API_BASE}/bids`, requestOptions);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// GET /grouped - Get bids grouped by product (dashboard data)
export async function getBidsGroupedByProduct(): Promise<IBiddingDashboardResponse> {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const res = await fetch(`${API_BASE}/bids/grouped`, requestOptions);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// GET /product/:product - Get bids for specific product
export async function getBidsByProduct(
  productId: string
): Promise<IProductBidsResponse> {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const res = await fetch(
    `${API_BASE}/bids/product/${productId}`,
    requestOptions
  );

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// GET /top-bidders - Get top bidders
export async function getTopBidders(
  limit?: number
): Promise<ITopBiddersResponse> {
  const url = new URL(`${API_BASE}/bids/top-bidders`);

  if (limit) {
    url.searchParams.append("limit", limit.toString());
  }

  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const res = await fetch(url.toString(), requestOptions);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// GET /:productId - Get bids by product ID (backward compatibility)
export async function getBidsByProductId(
  productId: string
): Promise<IBidResponse> {
  const res = await fetch(`${API_BASE}/bids/${productId}`);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// POST /wishlist - Create wishlist entry (Protected)
export async function createWishlist(
  wishlistData: IWishlistPayload,
  token: string
): Promise<IWishlistResponse> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify(wishlistData);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/bids/wishlist`, requestOptions);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}

// POST / - Create a new bid (Protected)
export async function createBid(
  bidData: IBidPayload,
  token: string
): Promise<IBid> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify(bidData);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/bids`, requestOptions);

  if (!res.ok) {
    await handleApiError(res);
  }

  const response: IBid = await res.json();
  return response;
}
