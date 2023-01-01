import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArd8VbOGcgI-5rmE_ewLKik-3_USQT55A",
    authDomain: "todo-list-app-c44de.firebaseapp.com",
    projectId: "todo-list-app-c44de",
    storageBucket: "todo-list-app-c44de.appspot.com",
    messagingSenderId: "824272233249",
    appId: "1:824272233249:web:13775dae232e6cd2a99460"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);