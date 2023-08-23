import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initialiseApp({
  apiKey: "AIzaSyDcvfE1jW6fCp4aW_CdEx-lbXBGTzXonC8",
  authDomain: "auctioneer-8ce8c.firebaseapp.com",
  projectId: "auctioneer-8ce8c",
  storageBucket: "auctioneer-8ce8c.appspot.com",
  messagingSenderId: "872231673560",
  appId: "1:872231673560:web:447ee68a7642ee06fa81ad",
  measurementId: "G-SETTQ10ESZ",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
