import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAdCGbdgxinTumKbJCgYrsxo7hXTgPFOeo",
  authDomain: "balen-dev.firebaseapp.com",
  projectId: "balen-dev",
  storageBucket: "balen-dev.appspot.com",
  messagingSenderId: "751055788208",
  appId: "1:751055788208:web:dbd1f91d13ceea43680375",
  measurementId: "G-N36R1SEF7P",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const firestore = getFirestore(firebase);

const messaging = getMessaging(firebase);

export { firebase, firestore, messaging };
