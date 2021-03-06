import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWRTxoNK5HlL3mvPqYSe_YvZChn6XDKjk",
  authDomain: "tmdb-clone-d87bb.firebaseapp.com",
  projectId: "tmdb-clone-d87bb",
  storageBucket: "tmdb-clone-d87bb.appspot.com",
  messagingSenderId: "984743168114",
  appId: "1:984743168114:web:dc8f3b9dfb9fa28e115aeb",
  measurementId: "G-PJD69M7MSY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
export default db;
