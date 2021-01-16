import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// export data to firebase 1)
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD1rPHdeChcrThdyz_XLvkoKV9YPRVe4Bc",
  authDomain: "netflix-clone-10bab.firebaseapp.com",
  projectId: "netflix-clone-10bab",
  storageBucket: "netflix-clone-10bab.appspot.com",
  messagingSenderId: "1037869110263",
  appId: "1:1037869110263:web:44ee3fa9c388f67b4ed4f2",
};

const firebase = Firebase.initializeApp(config);

// export data to firebase 2) -> index.js
// seedDatabase(firebase);

export { firebase };
