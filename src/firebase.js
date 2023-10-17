
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChVy5oJkAha6Fc0_Pjl5EuKG1J54gCTAc",
  authDomain: "e-techstore.firebaseapp.com",
  projectId: "e-techstore",
  storageBucket: "e-techstore.appspot.com",
  messagingSenderId: "555171855236",
  appId: "1:555171855236:web:355983acb5aa262692bbd1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

console.log(db)