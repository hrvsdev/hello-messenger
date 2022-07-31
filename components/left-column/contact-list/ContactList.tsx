import styled from "styled-components";

import Contact from "./Contact";

export default function ContactList(): JSX.Element {
  const fakeUser = {
    name: "Harsh Vyas",
    id: "/788",
    time: "Aug 28",
    picture: "https://dummyimage.com/50",
    message: "Hello Messenger !",
  };

  return (
    <Contacts>
      <Contact {...fakeUser} />
    </Contacts>
  );
}

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
