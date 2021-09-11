import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
// need to seed the databasae

//config
const config = {
  apiKey: "AIzaSyAI6UslRjNarcW809rCzv5PoWRYJn6FuW0",
  authDomain: "netflix-clone-63da4.firebaseapp.com",
  projectId: "netflix-clone-63da4",
  storageBucket: "netflix-clone-63da4.appspot.com",
  messagingSenderId: "257969111947",
  appId: "1:257969111947:web:5b3edb1c1caee4b5e6258e",
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
