import { useState } from "react";
import styled from "styled-components";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { FiPlus } from "react-icons/fi";
import { BiUser, BiGroup, BiUserVoice } from "react-icons/bi";

export default function NewChatButton(): JSX.Element {
  // Menu show state
  const [show, setShow] = useState<boolean>(false);

  // Close
  const close = () => setShow(false);

  // Toggle
  const toggle = () => setShow((prev) => !prev);

  return (
    <>
      <NewChatMenuDialog show={show}>
        <Option>
          <BiUserVoice /> New Channel
        </Option>
        <Option>
          <BiGroup /> New Group
        </Option>
        <Option>
          <BiUser /> New Chat
        </Option>
      </NewChatMenuDialog>
      <ClickAwayListener onClickAway={close}>
        <ButtonWrapper onClick={toggle} show={show}>
          <FiPlus />
        </ButtonWrapper>
      </ClickAwayListener>
    </>
  );
}

const NewChatMenuDialog = styled.ul<{ show: boolean }>`
  position: absolute;
  bottom: 90px;
  right: 25px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.733);
  backdrop-filter: blur(10px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 12px;
  width: 200px;
  transition: all 200ms cubic-bezier(0.2, 0, 0.2, 1);
  transform-origin: bottom right;
  will-change: transform opacity;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0.4)")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  column-gap: 18px;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  height: 36px;
  outline: 0;

  svg {
    color: rgb(112, 117, 121);
    width: 21px;
    height: 21px;
  }

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ButtonWrapper = styled.button<{ show: boolean }>`
  background: #574dfc;
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 200ms;
  transform: ${({ show }) => (show ? "rotate(135deg)" : "rotate(0)")};

  svg {
    width: 35px;
    height: 35px;
  }
`;
