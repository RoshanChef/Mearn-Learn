// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1HLHaYYEQvXMmvxLOX5H2k-jLZ2fhGtg",
  authDomain: "googel-login-7e9c8.firebaseapp.com",
  projectId: "googel-login-7e9c8",
  storageBucket: "googel-login-7e9c8.firebasestorage.app",
  messagingSenderId: "85472246168",
  appId: "1:85472246168:web:9a91da3796a160203dd3ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider
}