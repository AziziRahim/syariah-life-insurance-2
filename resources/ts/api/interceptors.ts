import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { AuthStorage } from "./auth.storage";
import { logout } from "./auth.service";

// 🔥 EXTEND TYPE
export interface CustomAxiosConfig extends InternalAxiosRequestConfig {
    skipAuth?: boolean;
}

export const attachInterceptors = (api: AxiosInstance) => {
    // REQUEST
    api.interceptors.request.use(
        (config: CustomAxiosConfig) => {
            if (!config.skipAuth) {
                const token = AuthStorage.getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }

            return config;
        }
    );

    // RESPONSE
    api.interceptors.response.use(
        response => response,
        (error: AxiosError) => {
            const status = error.response?.status;
            const url = error.config?.url ?? "";

            const isAuthEndpoint =
                url.includes("/login") ||
                url.includes("/register") ||
                url.includes("/logout");

            if (status === 401 && !isAuthEndpoint) {
                logout();
            }

            return Promise.reject(error);
        }
    );
};
