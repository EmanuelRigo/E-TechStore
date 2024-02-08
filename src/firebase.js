import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChVy5oJkAha6Fc0_Pjl5EuKG1J54gCTAc",
  authDomain: "e-techstore.firebaseapp.com",
  projectId: "e-techstore",
  storageBucket: "e-techstore.appspot.com",
  messagingSenderId: "555171855236",
  appId: "1:555171855236:web:355983acb5aa262692bbd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
