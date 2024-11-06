// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBos7PJgrCwveLuf7sSauHff9Gz6kDqQiM",
  authDomain: "re-act-basics.firebaseapp.com",
  projectId: "re-act-basics",
  storageBucket: "re-act-basics.firebasestorage.app",
  messagingSenderId: "613719554065",
  appId: "1:613719554065:web:2e176cb318a26b474b59b0",
  measurementId: "G-DMK6YYGFYW"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_ANALITYCS = getAnalytics(FIREBASE_APP);
const FIREBASE_DB = getDatabase(FIREBASE_APP);
const FIREBASE_AUTHENTICATE = getAuth(FIREBASE_APP);
