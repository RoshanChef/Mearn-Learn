// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDygmCxLgj_WB-b-wewOuxBCRLNzf9hO9Q",
  authDomain: "facee-aea76.firebaseapp.com",
  projectId: "facee-aea76",
  storageBucket: "facee-aea76.firebasestorage.app",
  messagingSenderId: "743967369023",
  appId: "1:743967369023:web:f6ebc8debe2c8faaf8958a",
  measurementId: "G-TH8Y46MHJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const google_provider = new GoogleAuthProvider();
const github_provider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export { auth, google_provider, github_provider,facebookProvider }