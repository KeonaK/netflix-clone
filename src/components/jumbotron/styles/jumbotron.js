//macro will give the name element
import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  // destructuring the prop we want to pass
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 68.75rem;
  margin: auto;
  width: 100%;

  @media (max-width: 87.5rem) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
  padding: 3.125rem 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 68.75rem) {
    ${Item}:last-of-type h2 {
      margin-bottom: 3.125rem;
    }
  }
`;

export const Sec = styled.div`
  width: 60%;

  @media (max-width: 68.75) {
    width: 100%;
    padding: 0 2.8125;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 25rem) {
    font-size: 26px;
  }

  @media (max-width: 50rem) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 25rem) {
    font-size: 1.125rem;
  }
  @media (max-width: 50rem) {
    font-size: 1.25;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
