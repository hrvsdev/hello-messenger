import React, { useState } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

export default function Login() {
  const [email, setEmail] = useState<string>("");

  const onEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <Main>
      <LoginWrapper>
        <LogoWrapper>
          <H1>Hello</H1>
        </LogoWrapper>
        <Tagline>A secure and better way to Hello</Tagline>
        <LoginText>Sign in</LoginText>
        <GuestWrapper>
          <FaUser />
          <Text>Continue as Guest</Text>
        </GuestWrapper>
        <GoogleWrapper>
          <FcGoogle />
          <Text>Continue with Google</Text>
        </GoogleWrapper>
        <Or>or use</Or>
        <EmailWrapper>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={onEmailInput}
          />
          <InputIcon></InputIcon>
          <Error>Invalid email</Error>
          <Next>Next</Next>
        </EmailWrapper>
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
`;

const LoginWrapper = styled.div`
  box-shadow: #63636333 0 2px 8px;
  padding: 3rem;
  border-radius: 20px;
  background: white;
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

const GuestWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #574dfc;
  color: white;
  border-radius: 10px;
  height: 46px;
  font-size: 16px;
  font-weight: 500;
  outline: 0;
  border: 0;
  margin-bottom: 15px;
  transition: filter 200ms;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const GoogleWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border-radius: 10px;
  height: 46px;
  font-size: 16px;
  font-weight: 500;
  outline: 0;
  border: 0;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    width: 26px;
    height: 26px;
    margin-right: 9px;
  }
`;

const Icon = styled.div``;

const Text = styled.text``;

const Or = styled.div`
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: #7a7a7a;
`;

const EmailWrapper = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  border: 1px solid #ccc;
  font-weight: 500;
  border-radius: 10px;
  padding: 0 12px;
  margin-bottom: 20px;
`;

const InputIcon = styled.div``;

const Error = styled.div`
  display: none;
  color: #f43f5e;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  padding-left: 4px;
`;

const Next = styled.button`
  width: 100%;
  background: #e0e7ff;
  color: #4f46e5;
  border-radius: 10px;
  height: 46px;
  font-size: 16px;
  font-weight: 600;
  outline: 0;
  border: 0;
  margin-bottom: 15px;
  transition: background 200ms;
  will-change: background;
  cursor: pointer;

  &:hover {
    background: #d4defe;
  }

  &:active {
    background: #c5d4ff;
  }
`;
