
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoonMdMRvUwRIKkcFf-RQhEl8JrWN0ho8",
  authDomain: "bookshop-f99b0.firebaseapp.com",
  projectId: "bookshop-f99b0",
  storageBucket: "bookshop-f99b0.appspot.com",
  messagingSenderId: "318273551194",
  appId: "1:318273551194:web:74253793eebbe9c0299163"
};

const app = initializeApp(firebaseConfig);

console.log(app)