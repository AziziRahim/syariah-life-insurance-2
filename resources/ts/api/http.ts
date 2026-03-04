import axios from "axios";
import { attachInterceptors } from "./interceptors";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

attachInterceptors(api);

export default api;
