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
