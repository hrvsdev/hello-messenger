import styled from "styled-components";
import Linkify from "react-linkify";

import { MessageType } from "../types";

export default function Message(props: MessageType): JSX.Element {
  const { content, user, first, last } = props;

  const self = user === "self" ? true : false;

  return (
    <MessageWrapper first={first} last={last} className={self ? "self" : "other"}>
      <MessageBody self={self} first={first} last={last}>
        <Linkify>
          <Content self={self}>{content}</Content>
        </Linkify>
      </MessageBody>
      {/* <Time self={self}>6:52 pm</Time> */}
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div<{ first: boolean; last: boolean }>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 10px;
  margin-bottom: ${({ last }) => last && "10px"};
  &.self {
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
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
      if(first && last) return "20px"
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
