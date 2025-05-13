import { Product } from '@/types/product';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

interface ProductResponse {
  products: Product[];
}

export async function getAllProducts(): Promise<ProductResponse> {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch products');
  }
  return res.json();
}
