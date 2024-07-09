import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-website-ac8cf.firebaseapp.com",
  projectId: "task-manager-website-ac8cf",
  storageBucket: "task-manager-website-ac8cf.appspot.com",
  messagingSenderId: "1029323305216",
  appId: "1:1029323305216:web:d56373f9db74b14ac083e5",
};

export const app = initializeApp(firebaseConfig);
