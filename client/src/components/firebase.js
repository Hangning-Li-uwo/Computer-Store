import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDyc5gj-7b9YclJGtd1ud9n822WOytoitU",
  authDomain: "sensor-13ce6.firebaseapp.com",
  projectId: "sensor-13ce6",
  storageBucket: "sensor-13ce6.firebasestorage.app",
  messagingSenderId: "1059425604798",
  appId: "1:1059425604798:web:c2d5f9f5c680422dbebaef",
  measurementId: "G-B9YXDTQCTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const google = new GoogleAuthProvider();


export { auth, db, app, google };