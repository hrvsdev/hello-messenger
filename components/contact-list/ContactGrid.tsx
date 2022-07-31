import styled from "styled-components";

import Contact from "./Contact";

export default function ContactGrid(): JSX.Element {
  return (
    <Contacts>
      <Contact />
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