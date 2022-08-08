import { useState } from "@hookstate/core";
import { motion } from "framer-motion";

import styled from "styled-components";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { FiPlus } from "react-icons/fi";
import { BiUser, BiGroup, BiUserVoice } from "react-icons/bi";

export default function NewChatButton(): JSX.Element {
  // Menu show state
  const show = useState<boolean>(false);

  // Close
  const close = () => show.set(false);

  // Toggle
  const toggle = () => show.set((prev) => !prev);

  // Animations variants
  const menuVariants = {
    show: { opacity: 1, scale: 1 },
    hide: { opacity: 0, scale: 0.55 },
  };

  const buttonVariants = {
    original: { rotate: 0 },
    rotate: { rotate: 135 },
  };

  return (
    <>
      <NewChatMenuDialog
        initial="hide"
        animate={show.value ? "show" : "hide"}
        transition={{ type: "tween", duration: 0.25 }}
        variants={menuVariants}>
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
        <ButtonWrapper
          onClick={toggle}
          animate={show.value ? "rotate" : "original"}
          variants={buttonVariants}>
          <FiPlus />
        </ButtonWrapper>
      </ClickAwayListener>
    </>
  );
}

const NewChatMenuDialog = styled(motion.ul)`
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
  transform-origin: bottom right;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  column-gap: 18px;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
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
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ButtonWrapper = styled(motion.button)`
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

  svg {
    width: 35px;
    height: 35px;
  }
`;
