import { Product, ProductResponse } from '@/types/product';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getAllProducts(): Promise<ProductResponse> {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch products');
  }
  return res.json();
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${id}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch product');
  }

  return res.json();
}

export async function createProduct(productData: {
  title: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  price: number;
}, token: string): Promise<Product> {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

if (token) {
  myHeaders.append("Authorization", `Bearer ${token}`);
}

  const raw = JSON.stringify(productData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/products`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create product');
  }

  return res.json();
}

export async function updateProduct(id: string, productData: {
  title: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  price: number;
}, token: string): Promise<ProductResponse> {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

if (token) {
  myHeaders.append("Authorization", `Bearer ${token}`);
}

  const raw = JSON.stringify(productData);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/products/${id}`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create product');
  }

  return res.json();
}

export async function deleteProduct(id: string, token: string): Promise<string> {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

if (token) {
  myHeaders.append("Authorization", `Bearer ${token}`);
}

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const res = await fetch(`${API_BASE}/products/${id}`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create product');
  }

  return res.json();
}