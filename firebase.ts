import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEyQ_jkkAepeG5_UBhXrpuPK0xK06bBvQ",
  authDomain: "chatgpt-messenger-c967c.firebaseapp.com",
  projectId: "chatgpt-messenger-c967c",
  storageBucket: "chatgpt-messenger-c967c.appspot.com",
  messagingSenderId: "20833228547",
  appId: "1:20833228547:web:159199d3abe87e9debfb36"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };