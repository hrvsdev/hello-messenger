import styled from "styled-components";

import { BiSmile, BiImageAlt, BiSend } from "react-icons/bi";

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Left>
        <InputRootWrapper>
          <IconWrapper>
            <BiSmile />
          </IconWrapper>
          <InputWrapper>
            <input type="text" placeholder="Type a message" spellCheck="false" />
          </InputWrapper>
          <IconWrapper>
            <BiImageAlt />
          </IconWrapper>
        </InputRootWrapper>
      </Left>
      <Right>
        <SendIcon>
          <BiSend />
        </SendIcon>
      </Right>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  /* max-width: 700px; */
  flex-shrink: 0;
  height: 60px;
  margin-bottom: 20px;
  padding: 0 20px;
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
  column-gap: 10px;
  flex-grow: 1;
  background: #f5f7fb;
  border-radius: 27px;
  height: 54px;
  padding: 0 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: rgb(112, 117, 121);

  svg {
    width: 26px;
    height: 26px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  input {
    all: unset;
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendIcon = styled.div`
  width: 54px;
  height: 54px;
`;
