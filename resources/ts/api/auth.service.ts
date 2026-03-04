import { api } from "./index";
import { AuthStorage } from "./auth.storage";

interface LoginPayload {
    email: string;
    password: string;
    remember_me?: boolean;
}

interface LoginResponse {
    token: string;
    expires_at?: string;
    user: any;
}

let isLoggingOut = false;


export interface RegisterPayload {
    fullName: string;
    motherName: string;
    gender: string;
    phoneNumber?: string | null;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    secretWord: string;
    dateOfBirth: string;
}

export interface RegisterResponse {
    message: string;
}


export const login = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    AuthStorage.clear();
    const response = await api.post<LoginResponse>("/login", payload);

    const { token, expires_at, user } = response.data;

    if (!token) {
        throw new Error("Token not returned");
    }

    AuthStorage.setToken(token, expires_at);
    localStorage.setItem("user", JSON.stringify(user));

    if (payload.remember_me) {
        localStorage.setItem("remember_me", "true");
    } else {
        localStorage.removeItem("remember_me");
    }

    return response.data;
};

export const logout = async (): Promise<void> => {
    if (isLoggingOut) return;
    isLoggingOut = true;

    try {
        await api.post("/logout");
    } catch {
        // ignore
    } finally {
        AuthStorage.clear();
        localStorage.removeItem("remember_me");

        isLoggingOut = false;
        window.location.replace("/login");
    }
};

export const register = async (
    payload: RegisterPayload
): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>(
        "/doRegister",
        payload,
        {
            skipAuth: true,
        }
    );

    return response.data;
};
