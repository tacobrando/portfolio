// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj2C4ci99GVhoP5mlWY49__cWhch4aRCE",
  authDomain: "portfolio-87765.firebaseapp.com",
  projectId: "portfolio-87765",
  storageBucket: "portfolio-87765.appspot.com",
  messagingSenderId: "407161573437",
  appId: "1:407161573437:web:2674b809fdeda9cf9e5a54",
  measurementId: "G-1RZE6S9QMM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp