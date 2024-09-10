// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Ly71h7ywBDHPjpOY4CUwqDOLLunC2Vg",
  authDomain: "e-learning-1e30f.firebaseapp.com",
  projectId: "e-learning-1e30f",
  storageBucket: "e-learning-1e30f.appspot.com",
  messagingSenderId: "56290479804",
  appId: "1:56290479804:web:50d487ad56960b9b030ab9",
  measurementId: "G-8QJ6JGC4RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};