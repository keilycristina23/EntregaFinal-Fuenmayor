import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxcUDkUUGMyHz99Sq0qzJMytsf9aS9lN4",
  authDomain: "skinstudio-ar.firebaseapp.com",
  projectId: "skinstudio-ar",
  storageBucket: "skinstudio-ar.appspot.com",
  messagingSenderId: "269717541323",
  appId: "1:269717541323:web:c893f4d3f69c40357da64e"
};

const app = initializeApp(firebaseConfig);
export const initFirestore = () => app 