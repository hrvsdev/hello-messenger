import { useState } from "@hookstate/core";
import styled from "styled-components";

import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiEnvelope } from "react-icons/bi";

import { signInWithGoogle } from "../../firebase/auth";

export default function Login() {
  // Input state
  const email = useState<string>("");

  // Input error state
  const emailError = useState<boolean>(false);

  const onEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    email.set(e.currentTarget.value);
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
        <GoogleWrapper onClick={signInWithGoogle}>
          <FcGoogle />
          <Text>Continue with Google</Text>
        </GoogleWrapper>
        <Or>
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </Or>
        <EmailWrapper>
          <InputWrapper>
            <BiEnvelope />
            <Input
            error={emailError.value}
              type="email"
              placeholder="Enter email"
              onChange={onEmailInput}
            />
          </InputWrapper>
          <Error show={emailError.value}>Invalid email</Error>
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
    width: 17px;
    height: 17px;
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
    width: 22px;
    height: 22px;
    margin-right: 9px;
  }
`;

const Text = styled.p``;

const Or = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
  align-items: center;
  font-size: 15px;
  margin-bottom: 20px;

  .line {
    border-top: 1px solid #e7e7e7;
  }

  .or {
    display: flex;
    justify-content: center;
    color: #585858;
  }
`;

const EmailWrapper = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  margin-bottom: 3px;

  svg {
    color: #6366f1;
    position: absolute;
    left: 12px;
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input<{ error: boolean }>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  border: 1px solid ${({ error }) => (error ? "#EF4444" : "#ccc")};
  font-weight: 500;
  border-radius: 10px;
  padding: 0 38px;

  &:focus {
    border: 1px solid #6366f1;
  }
`;

const Error = styled.p<{ show: boolean }>`
  color: #dc2626;
  margin-top: 3px;
  margin-bottom: 16px;
  padding-left: 4px;
  font-size: 13px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
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
