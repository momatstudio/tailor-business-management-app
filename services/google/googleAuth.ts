// import { GOOGLE_CLIENT_ID } from "@/constants/constants";
// import { auth } from "@/firebase/config";
// import * as AuthSession from "expo-auth-session";
// import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

// /**
//  * Sign in with Google using Expo AuthSession and Firebase.
//  *
//  * Steps:
//  *  - Use EXPO/Google OAuth flow to obtain an access token (and id_token if available).
//  *  - Create a Firebase credential and sign in with it.
//  *
//  * Notes:
//  *  - Replace WEB_CLIENT_ID with your project's OAuth 2.0 Web client ID from Google Cloud / Firebase console.
//  *  - For standalone builds you may need to change redirect URI configuration and use a proper client ID for your package.
//  */

// const WEB_CLIENT_ID = GOOGLE_CLIENT_ID;

// export async function signInWithGoogleAsync(): Promise<void> {
//   // Build redirect URI for Expo. useProxy true works well during development with Expo.
//   const redirectUri = AuthSession.makeRedirectUri();
//   //   const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

//   const scopes = encodeURIComponent("profile email");
//   const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${encodeURIComponent(
//     WEB_CLIENT_ID
//   )}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}`;

//   try {
//     const result = await AuthSession.startAsync({ authUrl });

//     // result.type === 'success' => result.params contains access_token (and possibly id_token)
//     if (result.type !== "success") {
//       throw new Error("Google sign-in cancelled");
//     }

//     const { access_token, id_token } = (result as any).params;

//     if (!access_token && !id_token) {
//       throw new Error("No access token returned from Google");
//     }

//     // Create Firebase credential. GoogleAuthProvider.credential accepts idToken (first arg) and accessToken (second arg)
//     const credential = GoogleAuthProvider.credential(
//       id_token ?? null,
//       access_token ?? null
//     );

//     // Sign in with Firebase
//     await signInWithCredential(auth, credential);

//     // Success: Firebase auth state is updated and persisted by firebase config
//   } catch (error) {
//     // Re-throw for caller to handle (UI/analytics/snackbar)
//     throw error;
//   }
// }

import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function signInWithGoogleAsync(): Promise<void> {
  GoogleSignin.configure({
    webClientId: "YOUR_WEB_CLIENT_ID_FROM_FIREBASE",
  });
}
