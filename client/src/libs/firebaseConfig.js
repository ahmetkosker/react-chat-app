import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfEuW1MR8MFkOf1UfoR0P_MAfB7xGkBNk",
  authDomain: "react-chat-app-ebc9d.firebaseapp.com",
  projectId: "react-chat-app-ebc9d",
  storageBucket: "react-chat-app-ebc9d.appspot.com",
  messagingSenderId: "973307834907",
  appId: "1:973307834907:web:161e36b24dbce71fce7ebe",
  measurementId: "G-JQZTPBHGHM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  provider,
  signInWithPopup,
};
