import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg2.jpg`})
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

// export const PlayBtn = styled.button`
//   box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
//   background-color: #e6e6e6;
//   color: #000;
//   border-width: 0;
//   padding: 0.625rem 1.25rem;
//   border-radius: 0.312rem;
//   max-width: 8.125rem;
//   font-weight: bold;
//   font-size: 1.25rem;
//   margin-top: 0.625rem;
//   cursor: pointer;
//   transition: background-color 0.5s ease;

//   &:hover {
//     background-color: #ff1e1e;
//     color: white;
//   }
// `;
