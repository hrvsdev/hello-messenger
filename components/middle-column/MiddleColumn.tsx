import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import MessageList from "./message-list";

export default function MiddleColumn(): JSX.Element {
  return (
    <MiddleColWrapper>
      <Header />
      <MessageList/>
      <Footer />
    </MiddleColWrapper>
  );
}

const MiddleColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
