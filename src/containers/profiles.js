import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes"; // need routes to render out the header
import logo from "../NetflixLogo.svg";

// used to select a user profile
export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching Netflix?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            //   setProfile with the displayName and photURL
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
