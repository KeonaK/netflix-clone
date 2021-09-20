import React from "react";
import { SelectProfileContainer } from "./profiles";
import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export function BrowseContainer({ slides }) {
  //state for the profile
  const [profile, setProfile] = useState({});

  const [loading, setloading] = useState(true);
  //gets the user from firebase
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [profile.displayName]);
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
