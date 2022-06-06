// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvIbV5_Pd4YPwsGazno_XquITzsldxH-E",
  authDomain: "lawyer-2e1f7.firebaseapp.com",
  projectId: "lawyer-2e1f7",
  storageBucket: "lawyer-2e1f7.appspot.com",
  messagingSenderId: "347268900969",
  appId: "1:347268900969:web:5ac102fbe7c6e065265af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth