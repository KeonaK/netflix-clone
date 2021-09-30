import React from "react";
import { SelectProfileContainer } from "./profiles";
import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../NetflixLogo.svg";

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
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={logo}
              alt="Netflix"
            ></Header.Logo>
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureText> Watch Joker Now</Header.FeatureText>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him. Isolated, bullied and disregarded by society, Fleck
            begins a slow descent into madness as he transforms into the
            criminal mastermind known as the Joker.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
