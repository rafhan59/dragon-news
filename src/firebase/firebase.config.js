// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWX8tCk4xtFa4VGT1Ug9Q48gXkA9E57Oc",
  authDomain: "react-dragon-news-auth-7990e.firebaseapp.com",
  projectId: "react-dragon-news-auth-7990e",
  storageBucket: "react-dragon-news-auth-7990e.appspot.com",
  messagingSenderId: "1021568309442",
  appId: "1:1021568309442:web:e55d9c6afd28136018435b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;