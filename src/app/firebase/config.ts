// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXs-qIOFrEXkFdDGBPaGCAzV6TZ5R5XeI",
  authDomain: "threads-6914c.firebaseapp.com",
  projectId: "threads-6914c",
  storageBucket: "threads-6914c.firebasestorage.app",
  messagingSenderId: "419077924253",
  appId: "1:419077924253:web:3a1f3225ecc5d962593b74",
  measurementId: "G-5X5CP5HF86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
