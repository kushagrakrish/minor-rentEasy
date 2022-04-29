import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCtVttG0gnB8dob_AoYJvkltdE60NBktM",
  authDomain: "minor-renteasy.firebaseapp.com",
  projectId: "minor-renteasy",
  storageBucket: "minor-renteasy.appspot.com",
  messagingSenderId: "678163691335",
  appId: "1:678163691335:web:da35fa9ff32ad87c45fe62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
