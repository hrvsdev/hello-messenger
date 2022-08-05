import styled from "styled-components";
import Header from "./header";
import MessageList from "./message-list";
import Footer from "./footer";

export default function MiddleColumn(): JSX.Element {
  return (
    <MiddleColWrapper>
      <Header />
      <MessageList />
      <Footer />
    </MiddleColWrapper>
  );
}

const MiddleColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
`;
