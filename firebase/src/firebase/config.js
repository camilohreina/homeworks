import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRYzUcFIE2Xt1Nv95a-uPeYtfDg8LQxdU",
    authDomain: "edya2-7f0d5.firebaseapp.com",
    projectId: "edya2-7f0d5",
    storageBucket: "edya2-7f0d5.appspot.com",
    messagingSenderId: "31001426701",
    appId: "1:31001426701:web:a0c72cac211c4f12b70e44",
    measurementId: "G-2KF87VX0P9"
};


const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth()

const firebaseStorage = getFirestore(firebaseapp);

const DataBase = getFirestore();

export { firebaseapp, auth, firebaseStorage, DataBase }