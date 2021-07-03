import React from "react";
import {
  Container,
  Inner,
  Sec,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Sec = function JumbotronSec({ children, ...restProps }) {
  return <Sec {...restProps}>{children}</Sec>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
