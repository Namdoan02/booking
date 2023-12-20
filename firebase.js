
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR96S6VXMRPcNVwoKOOre8vIVMUFkWlTY",
  authDomain: "booking-app-d7ffe.firebaseapp.com",
  projectId: "booking-app-d7ffe",
  storageBucket: "booking-app-d7ffe.appspot.com",
  messagingSenderId: "556550442204",
  appId: "1:556550442204:web:77ec7b63e49ef0fe9b7819"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};