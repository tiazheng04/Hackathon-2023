import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, // to get database from firebase
  ref,  // give specific reference in out database
  push, // create new location in given reference
  set,  // adds data to our database
  onValue,  // reads data from our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyBYp6obxnscqK8E4DD-ACfnedT4O1INqCs",
  authDomain: "hackhardwarebu-8159b.firebaseapp.com",
  databaseURL: "https://hackhardwarebu-8159b-default-rtdb.firebaseio.com",
  projectId: "hackhardwarebu-8159b",
  storageBucket: "hackhardwarebu-8159b.appspot.com",
  messagingSenderId: "254650391814",
  appId: "1:254650391814:web:c1afa80c5656f92592d287",
  measurementId: "G-0DFM4EY9D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, onValue };
