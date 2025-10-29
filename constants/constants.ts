export const COOKIE_NAME = "tbma_user_session";
export const COOKIE_REFRESH_NAME = "tbma_refresh_token";
export const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds
export const JWT_EXPIRATION = "30s"; // 30 seconds
const REFRESH_TOKEN_EXPIRE = 60 * 60 * 24 * 30; // 30 days in seconds

export const REFRESH_BEFORE_EXPIRE = 60; // 1 minute in seconds

// Google OAuth constants
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const GOOGLE_REDIRECT_URI = `${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/google/callback`;
export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

// Environment constants
export const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
export const APP_SCHEME = process.env.EXPO_PUBLIC_APP_SCHEME;
export const JWT_SECRET = process.env.JWT_SECRET;

export const COOKIES_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: COOKIE_MAX_AGE,
};

export const REFRESH_COOKIE_OPTIONS = {
  ...COOKIES_OPTIONS,
  maxAge: REFRESH_TOKEN_EXPIRE,
};

export const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

export const TOKEN_KEY = "@auth_token";
