// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdXykQdbB-GXnNqUJEXuNh93xdteJtWF0",
  authDomain: "mydoctor-9b286.firebaseapp.com",
  databaseURL:'https://mydoctor-9b286-default-rtdb.firebaseio.com/',
  projectId: "mydoctor-9b286",
  storageBucket: "mydoctor-9b286.appspot.com",
  messagingSenderId: "467919741078",
  appId: "1:467919741078:web:d5fd8fec7ee2172e6e22b7"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);

export default Fire;