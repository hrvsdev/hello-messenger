import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { useMenuState } from "@szhsin/react-menu";

import { ContactType } from "../types";
import ContextMenu from "../context-menu";

export default function Contact(props: ContactType): JSX.Element {
  // Props destructuring
  const { id, picture, name, message, time } = props;

  // Context menu hook
  const [menuProps, toggleMenu] = useMenuState();

  // Context menu anchor point state
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  // Context menu function
  const onContextMenu = (e: React.MouseEvent): void => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    toggleMenu(true);
  };

  // Context menu props object
  const contextMenuData = {
    menuProps: menuProps,
    toggleMenu: toggleMenu,
    anchorPoint: anchorPoint,
  };

  return (
    <Link href={id}>
      <ContactWrapper onContextMenu={onContextMenu} as="a">
        <ContextMenu {...contextMenuData} />
        <Picture>
          <Image src={picture} alt="An image" width="50" height="50" />
        </Picture>
        <ContactInfo>
          <Top>
            <Name>{name}</Name>
            <Time>{time}</Time>
          </Top>
          <Bottom>
            <Message>{message}</Message>
          </Bottom>
        </ContactInfo>
      </ContactWrapper>
    </Link>
  );
}

const ContactWrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 72px;
  padding: 0 10px;
  width: 100%;
  border-radius: 12px;
  transition: background 250ms;
  flex-shrink: 0;

  &:hover {
    background: #f4f4f4;
  }
`;

const Picture = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  img {
    border-radius: 25px;
  }
`;

const ContactInfo = styled.div`
  height: 50px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 23px;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 17px;
`;
const Time = styled.p`
  font-size: 13px;
  font-weight: 600;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 23px;
`;

const Message = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #616161;
`;
