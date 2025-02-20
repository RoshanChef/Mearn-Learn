// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbMKxMuOJHtmKkV3hrt6iWin0jJm36IAo",
  authDomain: "login-c9b40.firebaseapp.com",
  projectId: "login-c9b40",
  storageBucket: "login-c9b40.firebasestorage.app",
  messagingSenderId: "957332294303",
  appId: "1:957332294303:web:7c7abd691d1b68ea64b0aa",
  measurementId: "G-L7FRN0ZJHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);