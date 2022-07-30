import styled from "styled-components";

import ContactList from "../contact-list";

export default function home(): JSX.Element {
  return (
    <Main>
      <ContactList />
    </Main>
  );
}

const Main = styled.main``;
