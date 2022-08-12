import styled from "styled-components";
import Linkify from "react-linkify";

import { useMenuState } from "@szhsin/react-menu";
import { useState } from "@hookstate/core";

import ContextMenu from "../context-menu";

import { MessageType } from "../types";

export default function Message(props: MessageType): JSX.Element {
  // Props
  const { content, user, first, last, id } = props;

  // Checking if user is self
  const self = user === "self" ? true : false;

  // Context menu hook
  const [menuProps, toggleMenu] = useMenuState();

  // Anchor point state
  const anchorPoint = useState({ x: 0, y: 0 });

  // Context menu action
  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    anchorPoint.set({ x: e.clientX, y: e.clientY });
    toggleMenu(true)
  };

  // Context menu props
  const contextMenuProps = {
    id: id,
    menuProps: menuProps,
    anchorPoint: anchorPoint.get(),
    toggleMenu: toggleMenu,
  };

  return (
    <MessageWrapper first={first} last={last} self={self} onContextMenu={onContextMenu}>
      <ContextMenu {...contextMenuProps} />
      <MessageBody self={self} first={first} last={last}>
        <Linkify>
          <Content self={self}>{content}</Content>
        </Linkify>
      </MessageBody>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div<{ first: boolean; last: boolean; self: boolean }>`
  display: flex;
  column-gap: 10px;
  margin-bottom: ${({ last }) => last && "10px"};
  flex-direction: ${({ self }) => (self ? "row-reverse" : "row")};
  padding: 2px calc(2% - 5px) 2px 2%;
  transition: background-color 200ms;
`;

const MessageBody = styled.div<{ self: boolean; first: boolean; last: boolean }>`
  display: flex;
  width: fit-content;
  border-radius: ${({ self, first, last }) => {
    if (self) {
      if (first && last) return "20px";
      if (first) return "20px 20px 3px 20px";
      if (last) return "20px 3px 20px 20px";
      else return "20px 3px 3px 20px";
    } else {
      if (first && last) return "20px";
      if (first) return "20px 20px 20px 3px";
      if (last) return "3px 20px 20px 20px";
      else return "3px 20px 20px 3px";
    }
  }};
  background: ${({ self }) => (self ? "#e0e7ff" : "#f5f7fb")};
`;

const Content = styled.p<{ self: boolean }>`
  max-width: 300px;
  padding: 8px 16px;
  color: ${({ self }) => (self ? "#4338ca" : "black")};

  a {
    all: unset;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      border-bottom: 1px solid #4338ca;
      width: 100%;
      right: 0;
      bottom: 1px;
    }
  }
`;

const Reaction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  border-radius: 50%;
  font-size: 14px;
`;

const Time = styled.p<{ self: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ self }) => (self ? "#6760e3" : "#616161")};
`;
