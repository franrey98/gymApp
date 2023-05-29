// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMi1bF3cLzxojrWxJcv3rjALMJNFktE8c",
  authDomain: "gymapp-c220b.firebaseapp.com",
  projectId: "gymapp-c220b",
  storageBucket: "gymapp-c220b.appspot.com",
  messagingSenderId: "937245940374",
  appId: "1:937245940374:web:174a2220c085791b9800b7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
