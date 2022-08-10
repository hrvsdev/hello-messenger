import styled from "styled-components";
import Header from "./header";
import MessageList from "./message-list";
import Footer from "./footer";
import Image from "next/image";

export default function MiddleColumn(): JSX.Element {
  return (
    <MiddleColWrapper>
      <Header />
      <MessageList />
      <Footer />
      <Background/>
    </MiddleColWrapper>
  );
}

const MiddleColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  position: relative;
  border-left: 1px solid #dee0e3;
  border-right: 1px solid #dee0e3;
`;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;
