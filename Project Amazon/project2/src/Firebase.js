// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZPwd0TyeGmhJxQGfNQikj4xXtHBBt3PQ",
  authDomain: "react-11-a5907.firebaseapp.com",
  databaseURL: "https://react-11-a5907-default-rtdb.firebaseio.com",
  projectId: "react-11-a5907",
  storageBucket: "react-11-a5907.appspot.com",
  messagingSenderId: "1044355512888",
  appId: "1:1044355512888:web:cd5bc2f00c7951545ac4cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);