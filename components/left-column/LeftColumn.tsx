import styled from "styled-components";

import Header from "./header";
import ContactList from "./contact-list";
import NewChatButton from "./new-chat-button";

export default function LeftColumn(): JSX.Element {
  return (
    <LeftColWrapper>
      <Header/>
      <ContactList/>
      <NewChatButton/>
    </LeftColWrapper>
  );
}

const LeftColWrapper = styled.div`
  display: flex;
  width: 500px;
  position: relative;
  flex-direction: column;
  height: 100vh;
`;
