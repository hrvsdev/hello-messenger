import { useState } from "@hookstate/core";
import styled from "styled-components";

import { BiUser, BiAt } from "react-icons/bi";
import { FiCheck, FiX } from "react-icons/fi";

import { UsernameCheckType } from "./types";

export default function Login() {
  // Input states
  const name = useState<string>("");
  const username = useState<string>("");

  // Error states
  const nameError = useState<boolean>(false);
  const showUsernameChecker = useState<boolean>(false);
  const usernameError = useState<boolean>(false);

  // On form submit
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nameError.set(false);
  };

  return (
    <Main>
      <LoginWrapper>
        <LogoWrapper>
          <H1>Hello</H1>
        </LogoWrapper>
        <Tagline>A secure and better way to Hello</Tagline>
        <LoginText>Add your information</LoginText>
        <FormWrapper onSubmit={onFormSubmit}>
          <Label htmlFor="name">Name</Label>
          <InputWrapper>
            <BiUser />
            <Input
              error={nameError.value}
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => name.set(e.target.value)}
            />
          </InputWrapper>
          <InputError show={nameError.value}>Name should be of atleast 3 characters</InputError>
          <Label htmlFor="username">Username</Label>
          <InputWrapper>
            <Input
              error={usernameError.value}
              id="username"
              type="text"
              placeholder="Enter a username"
              onChange={(e) => username.set(e.target.value)}
            />
            <BiAt />
          </InputWrapper>
          <UsernameCheck show={showUsernameChecker.value} error={usernameError.value}>
            <div className="top">
              {usernameError.value ? <FiX /> : <FiCheck />}
              <p>This username is {usernameError ? "unavailable" : "available"}</p>
            </div>
          </UsernameCheck>
          <Next>Confirm</Next>
        </FormWrapper>
      </LoginWrapper>
    </Main>
  );
}

const Main = styled.main`
  background: #eef2ff;
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

const FormWrapper = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;

  svg {
    color: #6366f1;
    position: absolute;
    left: 12px;
    width: 20px;
    height: 20px;
  }
`;

const Label = styled.label`
  font-weight: 500;
  display: block;
  margin-bottom: 4px;
  color: #525252;
  padding-left: 5px;
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

const InputError = styled.p<{ show: boolean }>`
  color: #dc2626;
  margin-top: 3px;
  margin-bottom: 8px;
  padding-left: 4px;
  font-size: 13px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const UsernameCheck = styled.div<UsernameCheckType>`
  margin-top: 2px;
  margin-bottom: 13px;
  padding-left: 4px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  .top {
    display: flex;
    column-gap: 5px;
    align-items: center;
    color: ${({ error }) => (error ? "#dc2626" : "#16A34A")};

    svg {
      width: 20px;
      height: 20px;
    }

    p {
      font-size: 13px;
    }
  }
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;

    &:hover {
      background: #e0e7ff;
    }
  }
`;
