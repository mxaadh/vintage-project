const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export interface ImageUploadResponse {
  message: string;
  path: string;
}

export async function uploadImage(file: File): Promise<ImageUploadResponse> {
  const formData = new FormData();
  formData.append("image", file);

  const requestOptions = {
    method: "POST",
    body: formData,
    // Don't set Content-Type header manually for FormData
    // The browser will set it automatically with the correct boundary
  };

  const res = await fetch(`${API_BASE}/upload`, requestOptions);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to upload image");
  }

  return res.json();
}
