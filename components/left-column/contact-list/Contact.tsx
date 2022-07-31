import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact(): JSX.Element {
  return (
    <ContactClick href="/">
      <ContactWrapper>
        <Picture>
          <Image
            src="https://dummyimage.com/50"
            alt="An image"
            width="50"
            height="50"
          />
        </Picture>
        <ContactInfo>
          <Top>
            <Name>Harsh Vyas</Name>
            <Time>Aug 28</Time>
          </Top>
          <Bottom>
            <Message>It&apos;s time to go home</Message>
          </Bottom>
        </ContactInfo>
      </ContactWrapper>
    </ContactClick>
  );
}

const ContactClick = styled(Link)`
  cursor: pointer;
`;

const ContactWrapper = styled.div`
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
