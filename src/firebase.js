// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXp__4rZRPilHtQ554dSsOQ13p3eCOnbA",
  authDomain: "baynt-61ccf.firebaseapp.com",
  projectId: "baynt-61ccf",
  storageBucket: "baynt-61ccf.firebasestorage.app",
  messagingSenderId: "368762077548",
  appId: "1:368762077548:web:7a58e3678569e0c04f3349"
};

// Initialize Firebase
// const app = !getApps().length?initializeApp(firebaseConfig):getApp();
const app = getApps().length?getApp():initializeApp(firebaseConfig);
// console.log({app});

export const auth = getAuth(app)
export const database = getFirestore(app)
export const storage = getStorage(app)