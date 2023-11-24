// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL3gm67Q2kaX-3M6qQWzjzFWvyFGlP7Do",
  authDomain: "auth-moha-milon-f2148.firebaseapp.com",
  projectId: "auth-moha-milon-f2148",
  storageBucket: "auth-moha-milon-f2148.appspot.com",
  messagingSenderId: "908713959768",
  appId: "1:908713959768:web:5f641c1ae463aa0b7ac52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;