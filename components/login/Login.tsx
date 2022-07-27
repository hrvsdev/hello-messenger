import styled from "styled-components";

export default function Login() {
  return (
    <Main>
      <LoginWrapper>
        <LogoWrapper>
          <H1>Hello</H1>
        </LogoWrapper>
        <Tagline>A secure and better way to say Hello</Tagline>
        <GoogleWrapper>
          <Icon></Icon>
          <Text>Sign in with Google</Text>
        </GoogleWrapper>
        <GuestWrapper>
          <Icon></Icon>
          <Text>Sign in as Guest</Text>
        </GuestWrapper>
        <OrDivider></OrDivider>
        <EmailWrapper>
          <Input type="text" placeholder="Enter email" />
          <InputIcon></InputIcon>
          <InputError>Invalid email</InputError>
        </EmailWrapper>
      </LoginWrapper>
    </Main>
  );
}

const Main = styled.main`
  background-color: #d6f9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginWrapper = styled.div`
  background-color: white;
  padding: 15px 20px;
  border-radius: 10px;
`;

const LogoWrapper = styled.div``;

const H1 = styled.h1`
  text-align: center;
  font-size: 80px;
  line-height: 60px
`;

const Tagline = styled.p``;

const GoogleWrapper = styled.div``;

const Icon = styled.div``;

const Text = styled.text``;

const GuestWrapper = styled.text``;

const OrDivider = styled.div``;

const EmailWrapper = styled.div``;

const Input = styled.input``;

const InputIcon = styled.div``;

const InputError = styled.div``;
