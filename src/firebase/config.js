// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFw6dkNS8lQ_FROHzhHf2VXycwSDpspA",
  authDomain: "aplicacion01-a9283.firebaseapp.com",
  projectId: "aplicacion01-a9283",
  storageBucket: "aplicacion01-a9283.appspot.com",
  messagingSenderId: "183406297270",
  appId: "1:183406297270:web:46ff3d36502d442a6c2617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()