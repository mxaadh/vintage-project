export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  dob: string; // ISO format or string date
  gender: 'male' | 'female' | string;
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