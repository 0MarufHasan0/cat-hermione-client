// Shared backend API base URL.
// Set NEXT_PUBLIC_BASE_URI in .env (e.g. http://localhost:8000).
export const BASE_URI =
  process.env.NEXT_PUBLIC_BASE_URI ?? "http://localhost:8000";

// Build a full API URL from a path such as "/events".
export function apiUrl(path: string) {
  return `${BASE_URI}${path.startsWith("/") ? path : `/${path}`}`;
}
