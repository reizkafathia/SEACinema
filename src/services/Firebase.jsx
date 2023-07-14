import { initializeApp, getApps } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJ3v2yC1bJiYzCk3LkvLDdEGKRDJG8guA",
  authDomain: "login-sea-cinema.firebaseapp.com",
  projectId: "login-sea-cinema",
  storageBucket: "login-sea-cinema.appspot.com",
  messagingSenderId: "356094040506",
  appId: "1:356094040506:web:77bdd09d154c5ece33a583",
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const FirebaseAuth = getAuth()

export const SignUp = async (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignOut = async () => {
  await signOut(FirebaseAuth);
};
