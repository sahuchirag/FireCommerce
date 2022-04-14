import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg2gn7u4fct59RtNuf7knpmjp-P2FIVA4",
  authDomain: "firecommerce-f69ea.firebaseapp.com",
  projectId: "firecommerce-f69ea",
  storageBucket: "firecommerce-f69ea.appspot.com",
  messagingSenderId: "546189534614",
  appId: "1:546189534614:web:dfb10f98dcc095a60269b7",
  measurementId: "G-G059HCJS61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)

export default fireDB