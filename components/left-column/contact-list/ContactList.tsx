import { useState } from "react";
import styled from "styled-components";

import Contact from "./Contact";

export default function ContactList(): JSX.Element {
  // Selected contact array
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const fakeUser = {
    name: "Harsh Vyas",
    time: "Aug 28",
    picture: "https://dummyimage.com/50",
    message: "Hello Messenger !",
    selectedContacts: selectedContacts,
    setSelectedContacts: setSelectedContacts,
  };

  const u1 = {
    id: "login",
  };

  const u2 = {
    id: "2",
  };

  const u3 = {
    id: "3",
  };

  return (
    <Contacts>
      <Contact {...fakeUser} {...u1} />
      <Contact {...fakeUser} {...u2} />
      <Contact {...fakeUser} {...u3} />
    </Contacts>
  );
}

const Contacts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  flex-grow: 1;
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
