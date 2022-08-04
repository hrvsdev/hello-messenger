import styled from "styled-components";
import Image from "next/image";

import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Left>
        <UserInfo>
          <Picture>
          <Image src="https://i.pravatar.cc/750" alt="An image" width="40" height="40" />
          </Picture>
          <Info>
            <Name>User name</Name>
            <Status>last seen recently</Status>
          </Info>
        </UserInfo>
      </Left>
      <Right>
        <IconWrapper>
          <BiDotsHorizontalRounded />
        </IconWrapper>
      </Right>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 15px;
  border-bottom: 1px solid #dee0e3;
`;

const Left = styled.div``;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Picture = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50%;

  img{
    border-radius: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
`;

const Name = styled.h4`
  font-size: 18px;
  font-weight: 500;
  height: 22px;
`;
const Status = styled.p`
  font-size: 14px;
  height: 18px;
  color: rgb(112, 117, 121);
`;

const Right = styled.div``;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: rgb(112,117,121);
  transition: background 250ms;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;
