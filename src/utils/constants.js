export const BASE_URL =
  (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "http://localhost:8000"
    : (import.meta.env.VITE_API_URL ||
       import.meta.env.VITE_BASE_URL ||
       "https://dev-connect-back-end-hwsp.vercel.app");

export const SOCKET_URL =
  (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "http://localhost:8000"
    : (import.meta.env.VITE_SOCKET_URL ||
       import.meta.env.VITE_API_URL ||
       import.meta.env.VITE_BASE_URL ||
       "https://dev-connect-back-end-hwsp.vercel.app");