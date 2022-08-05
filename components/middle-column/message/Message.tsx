import styled from "styled-components";

export function Text(): JSX.Element {
  return (
    <MessageWrapper self={true}>
      <Message self={true}>
        <Content self={true}>Hello, I am Harsh 😆</Content>
        <Time self={true}>6:52 pm</Time>
      </Message>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div<{ self: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-${({ self }) => (self ? "end" : "start")};
`;

const Message = styled.div<{ self: boolean }>`
  display: flex;
  column-gap: 10px;
  border-radius: 18px;
  width: fit-content;
  background: ${({ self }) => (self ? "#574dfc" : "#f5f7fb")};
  `;

const Content = styled.p<{ self: boolean }>`
  padding: 5px 0;
  padding-left: 12px;
  color: ${({ self }) => (self ? "white" : "black")};
  `;

const Time = styled.p<{ self: boolean }>`
  padding: 2px 0;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-right: 10px;
  font-size: 12px;
  color: ${({ self }) => (self ? "#ffffffdc" : "#616161")};
`;
