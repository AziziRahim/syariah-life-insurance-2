const TOKEN_KEY = "access_token";
const EXPIRES_KEY = "expires_at";
const USER_KEY = "user";

export const AuthStorage = {
    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token: string, expiresAt?: string) {
        localStorage.setItem(TOKEN_KEY, token);
        if (expiresAt) {
            localStorage.setItem(EXPIRES_KEY, expiresAt);
        }
    },

    clear() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRES_KEY);
        localStorage.removeItem(USER_KEY);
    },

    isExpired(): boolean {
        const expiresAt = localStorage.getItem(EXPIRES_KEY);
        if (!expiresAt) return true;
        return new Date(expiresAt) <= new Date();
    },
};
