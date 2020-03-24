import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBuzmyorNZCakJpEu6j9uvw0zxSevaDOBU",
  authDomain: "covid-shagan.firebaseapp.com",
  databaseURL: "https://covid-shagan.firebaseio.com",
  projectId: "covid-shagan",
  storageBucket: "covid-shagan.appspot.com",
  messagingSenderId: "786300374921",
  appId: "1:786300374921:web:b6770d86ff84ca63addb58",
  measurementId: "G-MJGN5X3Q6Z"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore();