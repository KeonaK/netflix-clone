import React from "react";
import { Header } from "../components";
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
    </>
  );
}
