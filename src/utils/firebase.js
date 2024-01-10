// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW1UiHZTr9PJVVpfzCad244mS1Ts8cvdQ",
  authDomain: "netflix-chatgpt-a0a5e.firebaseapp.com",
  projectId: "netflix-chatgpt-a0a5e",
  storageBucket: "netflix-chatgpt-a0a5e.appspot.com",
  messagingSenderId: "438844832946",
  appId: "1:438844832946:web:30501fac83ee5df0d75dab",
  measurementId: "G-0SP4LCCQLR"
};
//it will help us to access to firebase in react

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();