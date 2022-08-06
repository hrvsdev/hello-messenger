import styled from "styled-components";

export default function Message({ self }: { self: boolean }): JSX.Element {
  return (
    <MessageWrapper className={self ? "self" : ""}>
      <MessageBody self={self}>
        <Content self={self}>
          The online encyclopedia project, Wikipedia, is the most popular wiki-based website, and is one of the most
          widely viewed sites in the world, having been ranked ...
        </Content>
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
  width: fit-content;
  border-radius: ${({ self }) => (self ? "20px 0 20px 20px" : "0px 20px 20px 20px")};
  background: ${({ self }) => (self ? "#e0e7ff" : "#f5f7fb")};
`;

const Content = styled.p<{ self: boolean }>`
  max-width: 280px;
  padding: 12px 0;
  padding-left: 16px;
  color: ${({ self }) => (self ? "#4338ca" : "black")};
`;

const Time = styled.p<{ self: boolean }>`
  padding: 5px 0;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-right: 12px;
  font-size: 12px;
  color: ${({ self }) => (self ? "#6760e3" : "#616161")};
`;
