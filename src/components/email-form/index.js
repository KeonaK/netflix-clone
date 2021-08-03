import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/email-form";

export default function EmailForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EmailForm.Input = function EmailFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

EmailForm.Button = function EmailFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Get Started" />{" "}
    </Button>
  );
};

EmailForm.Text = function EmailFormText({ children, ...restProps }) {
  return <Text {...restProps}> {children}</Text>;
};

EmailForm.Break = function EmailFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
