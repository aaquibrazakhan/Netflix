// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuXOrHg6gX22m5nI9v5YQpdEfvuhCw_A",
  authDomain: "netflixgpt77.firebaseapp.com",
  projectId: "netflixgpt77",
  storageBucket: "netflixgpt77.appspot.com",
  messagingSenderId: "331528280561",
  appId: "1:331528280561:web:261b9d10e7d23a478e4c50",
  measurementId: "G-H5NFZSG44X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();