import React from "react";
import { Accordion, EmailForm } from "../components";
import faqData from "../cards/faq.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <EmailForm>
        <EmailForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </EmailForm.Text>
        <EmailForm.Break />
        <EmailForm.Input placeholder="Email address" />
        <EmailForm.Button>Get Started</EmailForm.Button>
      </EmailForm>
    </Accordion>
  );
}
