import styled from "styled-components";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { AnimatePresence, motion } from "framer-motion";
import { StateMethods } from "@hookstate/core";

interface props {
  menuState: StateMethods<boolean>;
  XandY: {
    points: {
      x: number;
      y: number;
    };
    origins: {
      originX: number;
      originY: number;
    };
  };
}

export default function ContextMenu({ menuState, XandY }: props): JSX.Element {
  return (
    <AnimatePresence>
      {menuState.value && (
        <ClickAwayListener onClickAway={() => menuState.set(false)}>
          <MenuWrapper
            x={XandY.points.x}
            y={XandY.points.y}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={XandY.origins}
            exit={{ scale: 0.5, opacity: 0 }}>
            ContextMenu
          </MenuWrapper>
        </ClickAwayListener>
      )}
    </AnimatePresence>
  );
}

const MenuWrapper = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  z-index: 1;
  background: rgba(255, 255, 255, 0.733);
  backdrop-filter: blur(10px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 12px;
  width: 200px;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;
