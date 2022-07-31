import styled from "styled-components";

import ContactList from "./contact-list";
import Header from "./header";

export default function LeftColumn(): JSX.Element {
  return (
    <LeftColWrapper>
      <Header/>
      <ContactList/>
    </LeftColWrapper>
  );
}

const LeftColWrapper = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  border-right: 1px solid #dee0e3;
  height: 100vh;
`;
