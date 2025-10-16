import { getApp, getApps, initializeApp } from "firebase/app";
import { Auth, getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvRznJi-E86j-ZVp3nJJSsQJns7X5Pdc8",
  authDomain: "tailor-business-management-app.firebaseapp.com",
  projectId: "tailor-business-management-app",
  storageBucket: "tailor-business-management-app.firebasestorage.app",
  messagingSenderId: "599972124353",
  appId: "1:599972124353:web:62010653a189c10c39a640",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let auth: Auth;
try {
  auth = initializeAuth(app);
} catch (error) {
  // Handle the 'auth/already-initialized' error for hot-reloading
  if ((error as any).code === "auth/already-initialized") {
    auth = getAuth(app);
  } else {
    throw error;
  }
}

export { app, auth };
