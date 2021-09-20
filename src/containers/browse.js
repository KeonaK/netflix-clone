import React from "react";
import { SelectProfileContainer } from "./profiles";
import { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  //state for the profile
  const [profile, setProfile] = useState({});
  //gets the user from firebase
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
