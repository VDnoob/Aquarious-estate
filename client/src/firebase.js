// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aquarious-estate.firebaseapp.com",
  projectId: "aquarious-estate",
  storageBucket: "aquarious-estate.appspot.com",
  messagingSenderId: "267257289998",
  appId: "1:267257289998:web:0e64265c208c7242920b5f",
  measurementId: "G-65NW8XD9ET"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);