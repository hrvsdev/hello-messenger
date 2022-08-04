import styled from "styled-components";

import LeftColumn from "../left-column";
import MiddleColumn from "../middle-column";

export default function home(): JSX.Element {
  return (
    <Main>
      <LeftColumn />
      <MiddleColumn/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  
`;