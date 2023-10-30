// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxboGcSrQRuFhba7f3Vx2MJZSDRbSq8kE",
  authDomain: "netflix-gpt-by-arnab.firebaseapp.com",
  projectId: "netflix-gpt-by-arnab",
  storageBucket: "netflix-gpt-by-arnab.appspot.com",
  messagingSenderId: "208996394654",
  appId: "1:208996394654:web:d5289fd941ba41a111bd8f",
  measurementId: "G-2W2Q0KFDBF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
