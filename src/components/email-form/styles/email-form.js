import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.25em;
  flex-wrap: wrap;

  @media (max-width: 62.5rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 28.125rem;
  width: 100%;
  border: 0;
  padding: 0.625em;
  height: 4.375rem;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 4.375rem;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 2em;
  font-size: 1.875;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
  @media (max-width: 62.5rem) {
    height: 3.125rem;
    font-size: 1rem;
    margin-top: 1.25em;
    font-weight: bold;
  }
  img {
    margin-left: 0.625em;
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 62.5rem) {
      width: 1rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 37.5rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
