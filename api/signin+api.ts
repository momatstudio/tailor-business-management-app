import { API_BASE_URL } from "@/config/api";
import { API_ENDPOINTS } from "@/config/api";
import { TOKEN_KEY } from "@/constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signIn = async (email: string, password: string) => {
  try {
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

    await AsyncStorage.setItem(TOKEN_KEY, data.token);
    return data;
  } catch (error) {
    console.error("Sign in failed:", error);
    throw error;
  }
};
