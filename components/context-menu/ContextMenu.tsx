import styled from "styled-components";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { AnimatePresence, motion } from "framer-motion";
import { StateMethods } from "@hookstate/core";

interface props {
  showMenu: StateMethods<boolean>;
  points: { x: number; y: number };
  origin: { x: number; y: number };
}

export const getMenuXandY = (e: React.MouseEvent, menuState: StateMethods<boolean>) => {
  menuState.set(false);
  e.preventDefault();

  let pointX: number = 0;
  let pointY: number = 0;
  let originX: number = 0;
  let originY: number = 0;

  const { clientWidth, clientHeight } = e.currentTarget;
  const { clientX, clientY } = e;
  if (clientWidth - clientX > 210) {
    pointX = clientX;
    originY = 0;
  } else {
    pointX = clientX - 200;
    originX = 1;
  }
  if (clientHeight - clientY > 50) {
    pointY = clientY;
    originY = 0;
  } else {
    pointY = clientY - 50;
    pointY = 1;
  }

  return [{ points: { pointX, pointY } }, { origins: { originX, originY } }];
};

export default function ContextMenu({ showMenu, points, origin }: props): JSX.Element {
  const get;

  return (
    <AnimatePresence>
      {showMenu.value && (
        <ClickAwayListener onClickAway={() => showMenu.set(false)}>
          <MenuWrapper
            x={points.x}
            y={points.y}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ originX: origin.x, originY: origin.y }}
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
