import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpnwwcjZyBVBJRCwZm9Xy_0qNY0CzLi0c",
  authDomain: "flatshoes-afc7a.firebaseapp.com",
  projectId: "flatshoes-afc7a",
  storageBucket: "flatshoes-afc7a.appspot.com",
  messagingSenderId: "779223688252",
  appId: "1:779223688252:web:0d76aa4948655275918f39",
};

// Prevent duplicate init:
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
