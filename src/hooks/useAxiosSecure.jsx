import axios, { AxiosError, AxiosResponse } from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_DOMAIN,
  withCredentials: true, 
  timeout: 15000,
});

/* ===============================
   REQUEST INTERCEPTOR
   (NO token manually added)
================================ */
axiosSecure.interceptors.request.use(
  (config) => {
    // Cookies are automatically attached by the browser
    return config;
  },
  (error) => Promise.reject(error)
);

/* ===============================
   RESPONSE INTERCEPTOR
================================ */
/**
 * @param {import("axios").AxiosResponse} response
 */
axiosSecure.interceptors.response.use(
  (response) => {
    return response;
  },
  /**
   * @param {import("axios").AxiosError} error
   */
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          // Unauthorized → session expired / not logged in
          window.location.href = "/login";
          break;

        case 403:
          console.error("Forbidden: insufficient permissions");
          break;

        case 404:
          console.error("API not found");
          break;

        case 500:
          console.error("Internal server error");
          break;

        default:
          console.error("API Error:", error.response.data?.message);
      }
    } else if (error.request) {
      console.error("Network error: server not responding");
    } else {
      console.error("Axios error:", error.message);
    }

    return Promise.reject(error);
  }
);

/* ===============================
   EXPORT
================================ */
const useAxiosSecure = () => axiosSecure;

export default useAxiosSecure;

// uses
// import useAxiosSecure from "@/lib/axiosSecure";

// const axiosSecure = useAxiosSecure();

// const getUsers = async () => {
//   const res = await axiosSecure.get("/users");
//   return res.data;
// };

// const createPost = async (payload: { title: string, description: string }) => {
//   const res = await axiosSecure.post("/posts", payload);
//   return res.data;
// };

// With TanStack Query(Recommended)
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "@/lib/axiosSecure";

// const useUsers = () => {
//   const axiosSecure = useAxiosSecure();

//   return useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });
// };
