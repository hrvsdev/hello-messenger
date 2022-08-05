import { useRef } from "react";
import styled from "styled-components";

import { BiSmile, BiImageAlt, BiSend } from "react-icons/bi";

export default function Footer(): JSX.Element {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onImageClick = () => {
    imageInputRef.current?.click();
  };

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
          <IconWrapper onClick={onImageClick}>
            <BiImageAlt />
            <input ref={imageInputRef} type="file" accept="image/*" />
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
  column-gap: 10px;
  flex-shrink: 0;
  height: 90px;
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
  cursor: pointer;

  &:hover {
    color: #6366f1;
  }

  svg {
    width: 26px;
    height: 26px;
  }

  input {
    display: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #f5f7fb;

  svg {
    width: 26px;
    height: 26px;
    color: #574dfc;
  }
`;
