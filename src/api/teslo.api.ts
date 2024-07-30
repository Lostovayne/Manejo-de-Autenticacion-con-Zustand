import axios from "axios";
import { useAuthStore } from "../stores";

const tesloApi = axios.create({
  baseURL: "http://localhost:3000/api",
});


//* Axios Interceptors *//
tesloApi.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  const token = useAuthStore.getState().token;
  // console.log('token', token)
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { tesloApi };
