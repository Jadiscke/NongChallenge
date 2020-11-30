// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
import firebaseConfig from "./firebase.config";

// Initialize Firebase

export const firebaseInit = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.firestore();
export const firebaseAuth = firebase.auth();
