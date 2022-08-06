import { useRef } from "react";
import styled from "styled-components";

import { BiSmile, BiImageAlt, BiSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

export default function Footer(): JSX.Element {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onImageClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <FooterWrapper>
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
        <SendIcon>
          <FiSend />
        </SendIcon>
      </InputRootWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  height: 90px;
  padding: 0 3%;
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


const SendIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 30px;
  padding-left: 8px;
  background: #f5f7fb;
  border-left: 1px solid #ccc;

  svg {
    transform: rotate(10deg);
    width: 25px;
    height: 25px;
    color: #574dfc;
  }
`;
