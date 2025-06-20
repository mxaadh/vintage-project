import { IUserResponse, LoginPayload } from "@/types/";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(userData: {
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  email: string;
  password: string;
}): Promise<IUserResponse> {
  // Assuming you have an AuthResponse type
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(userData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${API_BASE}/auth/register`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to register user");
  }

  return res.json();
}

export async function loginUser(payload: LoginPayload): Promise<IUserResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login failed");
  }

  return res.json();
}
