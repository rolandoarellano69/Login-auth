// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCduX12FD_H4PpJ_HSgAYKgtqRVf9HMQpY",
  authDomain: "vue-3-22.firebaseapp.com",
  projectId: "vue-3-22",
  storageBucket: "vue-3-22.appspot.com",
  messagingSenderId: "503709555187",
  appId: "1:503709555187:web:da5bc1b804249a1fbada86",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
