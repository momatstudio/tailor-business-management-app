import { firebaseConfig } from "@/constants/constants";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);

// Initialize services
const auth = initializeAuth(app, {
  // persistence: getReactNativePersistenc(AsyncStorage),
});

const database = getFirestore(app);

export { app, auth, database };
