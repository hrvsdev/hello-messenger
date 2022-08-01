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
  max-width: 400px;
  position: relative;
  flex-direction: column;
  border-right: 1px solid #dee0e3;
  height: 100vh;
`;