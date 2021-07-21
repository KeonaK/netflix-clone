import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 0.5em solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.375em 2.8125em;
  flex-direction: column;
  max-width: 50.9375rem;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
  @media (max-width: 37.5rem) {
    font-size: 2.1875rem;
  }
`;

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 0.625em;
  max-width: 45.5rem;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.625rem;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  // change color of icon
  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;
    user-select: none;
    @media (max-width: 37.5rem) {
      width: 1rem;
      font-size: 1rem;
    }
  }
`;

export const Body = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  @media (max-width: 37.5rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;
