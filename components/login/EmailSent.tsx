import styled from "styled-components";
import Link from "next/link";

import { useEffect } from "react";

import { BiEnvelope } from "react-icons/bi";
import { useState } from "@hookstate/core";

export default function EmailSent() {
  // Email state
  const email = useState<string | null>("user@hello.com");

  // Getting email on render
  useEffect(() => {
    email.set(window.localStorage.getItem("signInEmail"));
  });

  return (
    <Main>
      <LoginWrapper>
        <LogoWrapper>
          <H1>Hello</H1>
        </LogoWrapper>
        <Tagline>A secure and better way to Hello</Tagline>
        <LoginText>Verify your email</LoginText>
        <InfoText>Please check the email sent to</InfoText>
        <EmailWrapper>
          <div className="email">
            <BiEnvelope />
            <p>{email.value}</p>
          </div>
        </EmailWrapper>
        <WrongEmailWrapper>
          Wrong email? <Link href="/login">Edit</Link>
        </WrongEmailWrapper>
      </LoginWrapper>
    </Main>
  );
}

const Main = styled.main`
  background-color: #eef2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media only screen and (max-width: 500px) {
    align-items: flex-start;
    background: white;
  }
`;

const LoginWrapper = styled.div`
  box-shadow: #63636333 0 2px 8px;
  width: 380px;
  padding: 3rem;
  border-radius: 20px;
  background: white;

  @media only screen and (max-width: 500px) {
    padding: 100px 2rem 0;
    box-shadow: none;
  }
`;

const LogoWrapper = styled.div``;

const H1 = styled.h1`
  text-align: center;
  font-size: 70px;
  line-height: 55px;
  margin-bottom: 8px;
  background-image: linear-gradient(
    90deg,
    hsl(172deg 66% 50%) 0%,
    hsl(192deg 100% 48%) 20%,
    hsl(218deg 100% 72%) 40%,
    hsl(270deg 96% 76%) 60%,
    hsl(311deg 90% 71%) 80%,
    hsl(351deg 95% 71%) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  color: rgb(51, 65, 85);
  margin-bottom: 30px;
`;

const LoginText = styled.h3`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

const InfoText = styled.p`
  text-align: center;
  margin-bottom: 6px;
`;

const EmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  .email {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    padding: 1px 4px;
    background: #e0e7ff;
    color: #4f46e5;
    border-radius: 6px;

    svg {
      width: 20px;
      height: 20px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

const WrongEmailWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  a {
    font-weight: 500;
    color: #4f46e5;
    text-decoration: none;
  }
`;
