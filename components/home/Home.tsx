import { useState } from "@hookstate/core";
import styled from "styled-components";

import LeftColumn from "../left-column";
import MiddleColumn from "../middle-column";
import RightColumn from "../right-column";
import ContextMenu from "../context-menu";

export default function Home(): JSX.Element {
  const showMenu = useState(false);
  const points = useState({x: 0, y: 0})

  const onContextMenu = (e: React.MouseEvent) => {
    const {clientWidth, clientHeight} = e.currentTarget
    const {clientX, clientY} = e
    e.preventDefault();
    console.log({clientWidth, clientHeight})
    console.log({clientX, clientY})
    points.set({x: e.clientX, y: e.clientY})
    showMenu.set((prev) => !prev);
  };

  return (
    <Main onContextMenu={onContextMenu}>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
      <ContextMenu showMenu={showMenu} points={points.value}/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
`;
