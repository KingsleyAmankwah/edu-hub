import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA7-Thb2SWYoU36lbIsOuyki4n7KCmNJvA",
  authDomain: "edu-hub-199d6.firebaseapp.com",
  projectId: "edu-hub-199d6",
  storageBucket: "edu-hub-199d6.appspot.com",
  messagingSenderId: "173867802787",
  appId: "1:173867802787:web:a9ea8b1790515b88611f16",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
