// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN9jqIGNwmRyrkXHunmmL1cEati7NMcEA",
  authDomain: "chuangb-46ebe.firebaseapp.com",
  projectId: "chuangb-46ebe",
  storageBucket: "chuangb-46ebe.appspot.com",
  messagingSenderId: "1066563467094",
  appId: "1:1066563467094:web:bf19b8bbc38ec6509488f7",
  measurementId: "G-2T0LD6GCTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);