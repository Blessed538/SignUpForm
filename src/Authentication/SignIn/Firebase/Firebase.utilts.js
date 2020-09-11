import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDElF2_EKEchNbtuxcX861GfqxBqjrqgfE",
  authDomain: "signin-form-7b94e.firebaseapp.com",
  databaseURL: "https://signin-form-7b94e.firebaseio.com",
  projectId: "signin-form-7b94e",
  storageBucket: "signin-form-7b94e.appspot.com",
  messagingSenderId: "326316822171",
  appId: "1:326316822171:web:37c418291b28f203d2803e",
  measurementId: "G-GHN6WGWCTH"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;