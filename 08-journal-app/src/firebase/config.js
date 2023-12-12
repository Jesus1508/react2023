
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyBoiJN80tgs82_x182ONLyTzPH6abfvpAw",
    authDomain: "react-test-17c24.firebaseapp.com",
    projectId: "react-test-17c24",
    storageBucket: "react-test-17c24.appspot.com",
    messagingSenderId: "340783986751",
    appId: "1:340783986751:web:30c011174a3ba9458ca08a"
};

export const FirebaseApp    = initializeApp(firebaseConfig);
export const FirebaseAuth   = getAuth( FirebaseApp )
export const FirebaseDB     = getFirestore( FirebaseApp )