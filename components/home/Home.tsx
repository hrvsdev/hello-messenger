import { useState } from "@hookstate/core";
import styled from "styled-components";

import LeftColumn from "../left-column";
import MiddleColumn from "../middle-column";
import RightColumn from "../right-column";
import ContextMenu from "../context-menu";
import getMenuXandY from "../context-menu/utils/getMenuXandY";

export default function Home(): JSX.Element {
  const menuState = useState<boolean>(false);
  const XandY = useState({ points: { x: 0, y: 0 }, origins: { originX: 0, originY: 0 } });

  const onContextMenu = (e: React.MouseEvent) => {
    menuState.set(false);
    XandY.set(getMenuXandY(e));
    setTimeout(() => menuState.set(true), 100);
  };

  return (
    <Main onContextMenu={onContextMenu}>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
      <ContextMenu menuState={menuState} XandY={XandY.get()} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
`;
