import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAGTD7RJRcVq20bGq0IIobeRmEGNIA8LeE",
    authDomain: "life-under-water-7962b.firebaseapp.com",
    projectId: "life-under-water-7962b",
    storageBucket: "life-under-water-7962b.appspot.com",
    messagingSenderId: "1018468182082",
    appId: "1:1018468182082:web:f88fc1b02c335bd157a5db",
    measurementId: "G-PX1EVF6YK8"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;