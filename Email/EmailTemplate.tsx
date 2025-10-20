import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
import Logo from "../components/Logo";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>Welcome to Circl - You&apos;re on the waitlist!</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            backgroundColor: {
              button: "#4ECDC4",
              "side-nav": "#1A252F",
              "second-bg": "#F8F9FA",
            },
            textColor: {
              logo: "#4ECDC4",
              btn: "#4ECDC4",
              dark: "#1A252F",
              gray: "#64748B",
            },
          },
        },
      }}
    >
      <Body className="bg-second-bg text-base font-sans">
        <Head className="mx-auto text-center flex justify-center items-center py-10">
          <Logo />
        </Head>

        <Container className="bg-white p-45">
          <Heading className="text-center my-0 leading-8 text-dark">
            You&apos;re on the waitlist!
          </Heading>
          <Hr />
          <Section>
            <Row>
              <Text className="text-base text-gray">
                Congratulations {firstName}!
              </Text>

              <Text className="text-base text-gray">
                Thanks for joining the waitlist for Circl, the app designed to help you
                build genuine relationships with people you meet in the real world
                and stay on top of your network.
              </Text>

              <Text className="text-base text-gray">
                Your spot on the waitlist is officially confirmed. We&apos;re
                currently in development, working hard to create the most intuitive and powerful networking experience possible and help you
                connect and maintain meaningful relationships.
              </Text>
              <Text className="text-base text-gray">
                We&apos;ll be sending you early access when we&apos;re ready for
                you to test the product and give feedback.
              </Text>
              <Text className="text-base text-gray">
                If you have any questions, don&apos;t hesitate to reach out to us
                at{" "}
                <Link
                  className="text-logo"
                  href="mailto:hello@circl.app"
                >
                  hello@circl.app
                </Link>
              </Text>
              <Text className="text-gray">Best regards,</Text>
              <Text className="text-gray">The Circl Team</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
