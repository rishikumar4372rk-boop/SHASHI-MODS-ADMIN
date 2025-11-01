// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiEycy9D2FItl6tRx8ZvcFeKuDzDWvxIA",
  authDomain: "sashi-c5209.firebaseapp.com",
  databaseURL: "https://sashi-c5209-default-rtdb.firebaseio.com",
  projectId: "sashi-c5209",
  storageBucket: "sashi-c5209.firebasestorage.app",
  messagingSenderId: "966337172033",
  appId: "1:966337172033:web:685d0556697e107adeacc0",
  measurementId: "G-L9ZMF6BCJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);