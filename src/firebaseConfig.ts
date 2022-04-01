import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7KFBTqJk4pv07qoFlFpmF4GVM8nildGI",
  authDomain: "giphy-3f2aa.firebaseapp.com",
  projectId: "giphy-3f2aa",
  storageBucket: "giphy-3f2aa.appspot.com",
  messagingSenderId: "758684098996",
  appId: "1:758684098996:web:cdcfe50a2693897068d2e1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
