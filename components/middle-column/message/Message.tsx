import styled from "styled-components";

export default function Message({ self }: { self: boolean }): JSX.Element {
  return (
    <MessageWrapper className={self ? "self" : ""}>
      <MessageBody self={self}>
        <Content self={self}>Hello, I am Harsh 😆</Content>
        <Time self={self}>6:52 pm</Time>
      </MessageBody>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  &.self {
    justify-content: flex-end;
  }
`;

const MessageBody = styled.div<{ self: boolean }>`
  display: flex;
  column-gap: 10px;
  border-radius: 18px;
  width: fit-content;
  background: ${({ self }) => (self ? "#e0e7ff" : "#f5f7fb")};
`;

const Content = styled.p<{ self: boolean }>`
  padding: 6px 0;
  padding-left: 12px;
  color: ${({ self }) => (self ? "#4338ca" : "black")};
`;

const Time = styled.p<{ self: boolean }>`
  padding: 2px 0;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-right: 10px;
  font-size: 12px;
  /* color: #616161; */
  color: ${({ self }) => (self ? "#6760e3" : "#616161")};
  /* color: ${({ self }) => (self ? "#ffffffdc" : "#616161")}; */
`;
