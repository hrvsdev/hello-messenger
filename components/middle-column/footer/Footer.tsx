import styled from "styled-components";

import { BiSmile, BiImageAlt } from "react-icons/bi";

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Left>
        <InputRootWrapper>
          <IconWrapper>
            <BiSmile />
          </IconWrapper>
          <InputWrapper>
            <input type="text" />
          </InputWrapper>
          <IconWrapper>
            <BiImageAlt />
          </IconWrapper>
        </InputRootWrapper>
      </Left>
      <Right></Right>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  flex-shrink: 0;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const InputRootWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ccc;
  border-radius: 27px;
  height: 54px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
