import { useState } from "@hookstate/core";
import styled from "styled-components";

import LeftColumn from "../left-column";
import MiddleColumn from "../middle-column";
import RightColumn from "../right-column";
import ContextMenu from "../context-menu";

export default function Home(): JSX.Element {
  const onContextMenu = (e: React.MouseEvent) => {
    showMenu.set(false)
    console.log({ clientWidth, clientHeight });
    console.log({ clientX, clientY });
    setTimeout(()=>showMenu.set(true), 100)
  };

  return (
    <Main onContextMenu={onContextMenu}>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
      <ContextMenu showMenu={showMenu} points={points.value} origin={origin.value}/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
`;
