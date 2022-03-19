// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHOlO5hAGyFaJdaOw41dyd2kAmETWyKN0",
  authDomain: "shop-420a6.firebaseapp.com",
  databaseURL: "gs://shop-420a6.appspot.com",
  projectId: "shop-420a6",
  storageBucket: "shop-420a6.appspot.com",
  messagingSenderId: "655079415084",
  appId: "1:655079415084:web:a0e2be21e607a0ee6da089"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app; 

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };