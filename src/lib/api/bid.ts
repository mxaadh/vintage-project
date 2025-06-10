import {
  IBid,
  IBidPayload,
  IBidResponse,
  IWishlistPayload,
  IWishlistResponse,
} from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function createBid(
  bidData: IBidPayload,
  token: string
): Promise<IBid> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  const raw = JSON.stringify(bidData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/bids`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to place bid");
  }

  return res.json();
}

export async function getBidsByProductId(id: string): Promise<IBidResponse> {
  const res = await fetch(`${API_BASE}/bids/${id}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch bids");
  }

  return res.json();
}

export async function createWishlist(
  wishlistData: IWishlistPayload,
  token: string
): Promise<IWishlistResponse> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  const raw = JSON.stringify(wishlistData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/bids/wishlist`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to place bid");
  }

  return res.json();
}
