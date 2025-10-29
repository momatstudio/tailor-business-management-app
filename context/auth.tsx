import { API_BASE_URL, API_ENDPOINTS } from "@/config/api";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { AuthError } from "expo-auth-session";
import { useRouter } from "expo-router";
import * as React from "react";

export type AuthUser = {
  user: {
    id: 3;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
    role: string;
  };
  token: string;
};

export const AuthContext = React.createContext({
  user: null as AuthUser | null,
  token: null as string | null,
  signIn: (email: string, password: string) =>
    Promise.resolve({}) as Promise<any>,
  signUp: (
    fullNames: string,
    email: string,
    password: string,
    verifyPassword: string
  ) => Promise.resolve({}) as Promise<any>,
  signOut: () => {},
  isLoading: false,
  setIsLoading: (value: boolean) => {},
  error: null as AuthError | null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useAsyncStorage("token", null);
  const [user, setUser] = useAsyncStorage("user", null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<AuthError | null>(null);

  const signIn = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    setToken(data.token);
    setUser(data.user);
    router.replace("/(tabs)");
  };

  const signUp = async (
    fullNames: string,
    email: string,
    password: string,
    verifyPassword: string
  ) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullNames, email, password, verifyPassword }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    setToken(data.token);
    setUser(data.user);
    router.replace("/(tabs)");
  };
  const signOut = async () => {};
  const fetchWithAuth = async (url: string, options?: RequestInit) => {};
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signIn,
        signUp,
        signOut,
        isLoading,
        setIsLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
