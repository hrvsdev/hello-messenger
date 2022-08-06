import styled from "styled-components";
import Linkify from "react-linkify";

export default function Message({ self }: { self: boolean }): JSX.Element {
  return (
    <MessageWrapper className={self ? "self" : "other"}>
      <MessageBody self={self}>
        <Linkify>
          <Content self={self}>The online encyclopedia project</Content>
        </Linkify>
      </MessageBody>
      <Time self={self}>6:52 pm</Time>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 10px;

  &.other ~= &.self{
    background-color: red;
    /* margin: 8px 0; */
  }

  /* &.other + &.self{
    
  } */

  /* &.self + &.other {
    background-color: red;
  } */

  &.self {
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

const MessageBody = styled.div<{ self: boolean }>`
  display: flex;
  width: fit-content;
  border-radius: ${({ self }) => (self ? "20px 0 20px 20px" : "0px 20px 20px 20px")};
  background: ${({ self }) => (self ? "#e0e7ff" : "#f5f7fb")};
`;

const Content = styled.p<{ self: boolean }>`
  max-width: 300px;
  padding: 12px 16px;
  color: ${({ self }) => (self ? "#4338ca" : "black")};
`;

const Time = styled.p<{ self: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ self }) => (self ? "#6760e3" : "#616161")};
`;
