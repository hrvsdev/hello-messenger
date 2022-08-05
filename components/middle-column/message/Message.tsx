import styled from "styled-components";

export function Text(): JSX.Element {
  return (
    <MessageWrapper self={false}>
      <Message>
        <Content>Hello, I am Harsh 😆</Content>
        <Time>6:52 pm</Time>
      </Message>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div<{ self: boolean }>`
  width: 100%;
  display: flex;
`;

const Message = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 5px;
  border-radius: 18px;
  width: fit-content;
  background-color: #f5f7fb;
`;

const Content = styled.p`
  padding-left: 10px;
`;

const Time = styled.p`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-right: 8px;
  font-size: 12px;
  color: #616161;
`;
