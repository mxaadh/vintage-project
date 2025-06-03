// Define the payload structure you send to create or update a product
export interface ProductPayload {
  productData: {
    title: string;
    image?: string;
    description?: string;
    brand?: string;
    category?: string;
    price: number;
    countInStock?: number;
  },
  token: string
}

// Define the structure of the product object returned by the API
export interface Product {
  _id: string;
  title: string;
  image?: string;
  description?: string;
  // brand?: string;
  // category?: string;
  price: number;
  // countInStock?: number;
  // createdAt: string;
  // updatedAt: string;
}

// Define the general API response structure
export interface ProductResponse {
  data: Product;
}

export interface Product {
  _id: string;
  title: string;
  image?: string;
  description?: string;
  // brand?: string;
  // category?: string;
  price: number;
  // countInStock?: number;
  // createdAt: string;
  // updatedAt: string;
}

interface ProductData {
  title: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  price: number;
}