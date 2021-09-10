import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// need to seed the databasae

//config
const config = {};
const firebase = Firebase.initializeApp(config);

export { firebase };
