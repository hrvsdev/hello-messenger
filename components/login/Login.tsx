import styled from "styled-components";

export default function Login() {
  return (
    <Main>
      <LoginWrapper>
        <LogoWrapper>
          <H1>Hello</H1>
        </LogoWrapper>
        <Tagline>A secure way to say Hello</Tagline>
        <GoogleWrapper>
          <Icon></Icon>
          <Text>Sign in with Google</Text>
        </GoogleWrapper>
        <GuestWrapper>
          <Icon ></Icon>
          <Text>Sign in as Guest</Text>
        </GuestWrapper>
        <OrDivider></OrDivider>
        <EmailWrapper>
          <Input type="text" placeholder="Enter email" />
          <InputIcon></InputIcon>
          <InputError >Invalid email</InputError>
        </EmailWrapper>
      </LoginWrapper>
    </Main>
  );
}


const Main = styled.main`
  display: flex;
  background-color: #ecfeff;
  min-height: 100vh;
`

const LoginWrapper = styled.div`
  background-color: white;
`

const LogoWrapper = styled.div``

const H1 = styled.h1``

const Tagline = styled.p``

const GoogleWrapper = styled.div``

const Icon = styled.div``

const Text = styled.text``

const GuestWrapper = styled.text``

const OrDivider = styled.div``

const EmailWrapper = styled.div``

const Input = styled.input``

const InputIcon = styled.div``

const InputError = styled.div``