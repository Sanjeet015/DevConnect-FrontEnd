export const BASE_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BASE_URL ||
  (location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://dev-connect-back-end-hwsp.vercel.app");

export const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BASE_URL ||
  (location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://dev-connect-back-end-hwsp.vercel.app");