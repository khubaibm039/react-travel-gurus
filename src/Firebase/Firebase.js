// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxr3DU4kFRfh5SVWIO9EXtcL1gR4HtRY8",
    authDomain: "react-travel-gurus.firebaseapp.com",
    projectId: "react-travel-gurus",
    storageBucket: "react-travel-gurus.appspot.com",
    messagingSenderId: "740469393472",
    appId: "1:740469393472:web:2a73e00d87595d7efab7a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
