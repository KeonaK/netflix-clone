import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 9.375rem;
  height: auto;
  border: 0.1875rem solid black;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 12.5rem;
  max-width: 12.5rem;
  list-style-type: none;
  text-align: center;
  margin-right: 1.875rem;

  &:hover > ${Picture} {
    border: 0.1875rem solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
