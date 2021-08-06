import React from "react";
import { Feature, EmailForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        </Feature>
        <EmailForm>
          <EmailForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </EmailForm.Text>
          <EmailForm.Break />
          <EmailForm.Input placeholder="Email address" />
          <EmailForm.Button>Get Started</EmailForm.Button>
        </EmailForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
