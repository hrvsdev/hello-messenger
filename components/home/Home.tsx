import styled from "styled-components";

import LeftColumn from "../left-column";
import MiddleColumn from "../middle-column";
import RightColumn from "../right-column";

export default function Home(): JSX.Element {
  return (
    <Main>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
`;
