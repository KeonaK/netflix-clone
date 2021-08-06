import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10.3125em 2.8125em;
  border-bottom: 0.5em solid #222;
`;

export const Title = styled.h1`
  color: white;
  max-width: 40rem;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;

  @media (max-width: 37.5rem) {
    font-size: 2.1875rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 1em auto;

  @media (max-width: 37.5rem) {
    font-size: 1.125rem;
  }
`;
