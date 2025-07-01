import {
  ICategoryCountersResponse,
  IProduct,
  IProductPayload,
  IProductResponse,
} from "@/types/";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function getAllProducts(
  queryParams: Record<string, string | number> = {}
): Promise<IProductResponse> {
  // Convert query parameters to URLSearchParams
  const queryString = new URLSearchParams();

  // Add each query parameter to the URLSearchParams
  Object.entries(queryParams).forEach(([key, value]) => {
    queryString.append(key, String(value));
  });

  // Construct the full URL with query parameters
  const url = `${API_BASE}/products?${queryString.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch products");
  }

  return res.json();
}

export async function getCategoryCounters(): Promise<ICategoryCountersResponse> {
  const res = await fetch(`${API_BASE}/products/counters`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch category counters");
  }

  return res.json();
}

export async function getProductById(id: string): Promise<IProduct> {
  const res = await fetch(`${API_BASE}/products/${id}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch product");
  }

  return res.json();
}

export async function createProduct(
  productData: IProductPayload,
  token: string
): Promise<IProduct> {
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
    throw new Error(error.message || "Failed to create product");
  }

  return res.json();
}

export async function updateProduct(
  id: string,
  productData: IProductPayload,
  token: string
): Promise<IProduct> {
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
    throw new Error(error.message || "Failed to create product");
  }

  return res.json();
}

export async function deleteProduct(
  id: string,
  token: string
): Promise<string> {
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
    throw new Error(error.message || "Failed to create product");
  }

  return res.json();
}
