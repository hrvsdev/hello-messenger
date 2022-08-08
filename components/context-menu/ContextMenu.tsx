import styled from "styled-components";
import { motion } from "framer-motion";
import { StateMethods } from "@hookstate/core";

interface props {
  showMenu: StateMethods<boolean>;
  points: { x: number; y: number };
}

export default function ContextMenu({ showMenu, points }: props): JSX.Element {
  return showMenu.value ? (
    <MenuWrapper style={{ x: points.x, y: points.y }}>ContextMenu</MenuWrapper>
  ) : (
    <div></div>
  );
}

const MenuWrapper = styled(motion.div)`
  position: absolute;
  z-index: 1;
  background: rgba(255, 255, 255, 0.733);
  backdrop-filter: blur(10px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 12px;
  width: 200px;
`;
