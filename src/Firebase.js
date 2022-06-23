import firebase from "firebase/app"
import { initializeApp } from "firebase/app";

import { getAuth,auth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "firebase/database"
import { getMessaging, onMessage } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/messaging';
// import admin from 'firebase-admin';
// import { initializeApp,messaging} from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi0YLtt_K5OoKtJzm10_ukcLJgJnxU6eo",
  authDomain: "first-push-21b3f.firebaseapp.com",
  projectId: "first-push-21b3f",
  storageBucket: "first-push-21b3f.appspot.com",
  messagingSenderId: "1008842157586",
  appId: "1:1008842157586:web:c483b841f40e0c347a72cb",
  measurementId: "G-F5QM917MZW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;
export const ss=firebase.auth();
// export const f1=ss.createUserWithEmailAndPassword();
// export const f2=ss.onAuthStateChanged();
// export const f3=ss.signInWithEmailAndPassword();
// export const f4=ss.signOut();

// const analytics = getAnalytics(app);
export const mm=firebase.messaging();

export const dd=firebase.database();
export const getToken = (setTokenFound) => {
  return getToken(mm, {vapidKey: 'BKShxs3d2HHzpB2Y7wX1cGP4gAdjR21M3j9wZ1bDap2RbDiTvlGb1-yS1qtZXwf4Glw81VZZmvdT1oz8hXrBwjU'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}
