import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVbvw6FUTs1pLOrSzLjWM5qxe7vg-H-uc",
  authDomain: "react-notes-33ba1.firebaseapp.com",
  projectId: "react-notes-33ba1",
  storageBucket: "react-notes-33ba1.appspot.com",
  messagingSenderId: "687977700610",
  appId: "1:687977700610:web:9b0dafae0699ced446361b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
