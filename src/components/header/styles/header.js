import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
    top left / cover no-repeat;
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
  @media: (min-width: 90.5625rem) {
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
