import styled from "styled-components";

import ContactGrid from "./ContactGrid";
import Header from "./Header";

export default function ContactList(): JSX.Element {
  return (
    <SideColWrapper>
      <Header/>
      <ContactGrid/>
    </SideColWrapper>
  );
}

const SideColWrapper = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  border-right: 1px solid #dee0e3;
  height: 100vh;
`;
