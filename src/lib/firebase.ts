// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgoGPapqLxxOd91ASBycK9tcjOBp63350",
  authDomain: "fireship-linktree-8f46c.firebaseapp.com",
  projectId: "fireship-linktree-8f46c",
  storageBucket: "fireship-linktree-8f46c.appspot.com",
  messagingSenderId: "922900547934",
  appId: "1:922900547934:web:e71ddde32248471914e7cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();