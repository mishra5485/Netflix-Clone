import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAiNjdILSURqMJmSjIMYiPcBZm2isXMtc",
  authDomain: "netflix-clone-a578b.firebaseapp.com",
  projectId: "netflix-clone-a578b",
  storageBucket: "netflix-clone-a578b.appspot.com",
  messagingSenderId: "215144925120",
  appId: "1:215144925120:web:f0fe77884b6983f7636a25",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
