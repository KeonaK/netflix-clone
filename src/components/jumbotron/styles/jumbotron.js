//macro will give the name element
import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 68.75rem;
  margin: auto;
  width: 100%;

  @media (max-width: 87.5rem) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Sec = styled.div`
  //   width: 60%;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Image = styled.img``;
