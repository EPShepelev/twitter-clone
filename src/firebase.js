import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9zzMcQxA9cU-zthr93I69QNQIPDAASJw",
  authDomain: "twitter-clone-4e1db.firebaseapp.com",
  projectId: "twitter-clone-4e1db",
  storageBucket: "twitter-clone-4e1db.appspot.com",
  messagingSenderId: "173504077288",
  appId: "1:173504077288:web:e7b28417d17d8c368ad85d",
  measurementId: "G-KB9E4W3QM2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
