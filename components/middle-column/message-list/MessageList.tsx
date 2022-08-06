import styled from "styled-components";

import Message from "../message";

export default function MessageList() {
  return (
    <MessagesBox>
      <Message self={false}/>
    </MessagesBox>
  );
}

const MessagesBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow-y: scroll;
  flex-grow: 1;
  row-gap: 8px;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    border-radius: 3px;

    &:hover {
      background: #bdbdbd;
    }
  }
`;
