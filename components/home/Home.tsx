import styled from "styled-components";

import LeftColumn from "../left-column";

export default function home(): JSX.Element {
  return (
    <Main>
      <LeftColumn />
    </Main>
  );
}

const Main = styled.main``;
