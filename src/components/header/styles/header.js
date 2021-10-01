import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg2.jpg`})
    top left / cover no-repeat;

  @media (max-width: 68.75rem) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 3.5em;
  height: 4em;
  padding: 1.125rem;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 2rem;
  width: 6.75rem;
  // margin-right: 2.5rem;
  @media (min-width: 90.5625rem) {
    width: 10.4375rem;
    height: 2.8125rem;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  with: 5.24em;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 0.9375rem;
  border-radius: 0.1875em;
  padding: 0.5rem 1.0625rem;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 9.375rem 0 31.25rem 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 68.75rem) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.375rem;
  line-height: normal;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.45);
`;

export const FeatureText = styled.h2`
  color: white;
  font-size: 3.125rem;
  line-height: normal;
  font-weight: bold;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 1.875rem;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 0.625rem;
  width: 6.25rem;
  top: 2rem;
  right: 0.625rem;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: .625rem;;
    &:last-of-type {
      margin-bottom: 0;
    }
   
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: .625rem;
  }
  p {
    font-size: .75rem;
    margin-bottom: 0;
    margin-top: 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  postion: relative;
  margin-left: 1.25rem;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
