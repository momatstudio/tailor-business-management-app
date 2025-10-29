import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";

const TOKEN_KEY = "@auth_token";

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

    return data;
  } catch (error) {
    console.error("Sign in failed:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    await fetch(`${API_BASE_URL}${API_ENDPOINTS.logout}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } finally {
    await AsyncStorage.removeItem(TOKEN_KEY);
  }
};

export const getStoredToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

// const handleTokenExpiration = async () => {
//   const token = await getStoredToken();
//   if (!token) {
//     throw new Error('No token available');
//   }

//   try {
//     const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.refreshToken}`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       await signOut();
//       throw new Error('Token refresh failed');
//     }

//     const { newToken } = await response.json();
//     await AsyncStorage.setItem(TOKEN_KEY, newToken);
//   } catch (error) {
//     await signOut();
//     throw error;
//   }
// };
