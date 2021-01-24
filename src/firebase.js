import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCE5nEAOczHYWluToXsHSR2y9PfzCwnKc",
  authDomain: "slackclony.firebaseapp.com",
  projectId: "slackclony",
  storageBucket: "slackclony.appspot.com",
  messagingSenderId: "871396151325",
  appId: "1:871396151325:web:652b3396eec970a389f6f4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
