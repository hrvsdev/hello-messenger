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
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
      <Contact {...fakeUser} />
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
  

  /* width */
&::-webkit-scrollbar {
  width: 20px;
}

/* Track */
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
`;
