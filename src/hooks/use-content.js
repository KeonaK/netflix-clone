import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // use firebase to access the collection
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        //gets the document id
        const allContent = snapshot.docs.map((contentObj) => ({
          //the data
          ...contentObj.data(),
          //docId needed to get the key
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return { [target]: content };
}
