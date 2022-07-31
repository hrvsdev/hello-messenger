import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ContactType } from "../types";

export default function Contact(props: ContactType): JSX.Element {
  // Props destructuring
  const { id, picture, name, message, time } = props;

  return (
    <Link href={id}>
      <ContactWrapper as="a">
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
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
  height: 72px;
  padding: 0 10px;
  padding-right: 13px;
  width: 100%;
  border-radius: 10px;
  transition: background 250ms;

  &:hover {
    background: #f9fafb;
  }
`;

const Picture = styled.div`
  width: 50px;
  height: 50px;
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
