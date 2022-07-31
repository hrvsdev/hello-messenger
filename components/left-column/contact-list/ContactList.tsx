import styled from "styled-components";

import Contact from "./Contact";

export default function ContactList(): JSX.Element {
  const fakeUser = {
    name: "Harsh Vyas",
    id: "/",
    time: "Aug 28",
    picture: "https://dummyimage.com/50",
    message: "Hello Messenger !",
  };

  return (
    <Contacts>
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
    </Contacts>
  );
}

const Contacts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #f4f4f4;
    border-radius: 3px;
    
    &:hover {
      background: #e8e8e8;
    }
  }
`;
