import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC964ahdo82bnsOMEcM9j_IzqaEU6gExx8",
  authDomain: "reactjs-disney-plus-clone.firebaseapp.com",
  projectId: "reactjs-disney-plus-clone",
  storageBucket: "reactjs-disney-plus-clone.appspot.com",
  messagingSenderId: "475273445124",
  appId: "1:475273445124:web:0504f5bc5ccd0d17509a51"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
