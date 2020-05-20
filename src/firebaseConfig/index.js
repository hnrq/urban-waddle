import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDO16qy3E_0p8esMFcLT4G6IJ7coPGPo30",
  authDomain: "todo-app-dfdb0.firebaseapp.com",
  databaseURL: "https://todo-app-dfdb0.firebaseio.com",
  projectId: "todo-app-dfdb0",
  storageBucket: "todo-app-dfdb0.appspot.com",
  messagingSenderId: "155220106494",
  appId: "1:155220106494:web:e638e94d0d1fbe203e59af",
});

const db = firebase.firestore();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const isAuthenticated = () =>
  auth.currentUser || localStorage.getItem("accessToken");

export default {
  firebase,
  db,
  auth,
};
