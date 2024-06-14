import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACbFVHxk1ElPgntV8sso3492nr2ZMlEV4",
  authDomain: "react-netflix-clone-a34e3.firebaseapp.com",
  projectId: "react-netflix-clone-a34e3",
  storageBucket: "react-netflix-clone-a34e3.appspot.com",
  messagingSenderId: "530555676388",
  appId: "1:530555676388:web:b4b9963b221e3a3a2d2ef1",
  measurementId: "G-7NXPVGD9Q6"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
