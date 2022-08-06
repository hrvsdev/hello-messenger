import styled from "styled-components";

import Message from "../message";
import { MessageType } from "../types";

export default function MessageList() {
  const messages: MessageType[] = [
    {
      id: 2,
      content: "It is is chat app 2",
      user: "other",
      first: true,
      last: false,
    },
    {
      id: 3,
      content: "It is is chat app 3",
      user: "other",
      first: false,
      last: true,
    },
    {
      id: 4,
      content: "It is is chat app 4",
      user: "self",
      first: true,
      last: false,
    },
    {
      id: 3,
      content: "It is is chat app 3",
      user: "self",
      first: false,
      last: true,
    },
    {
      id: 3,
      content: "It is is chat app 3",
      user: "other",
      first: true,
      last: true,
    },
    {
      id: 4,
      content: "The online encyclopedia project",
      user: "self",
      first: true,
      last: false,
    },
    {
      id: 4,
      content: "It is is chat app 4",
      user: "self",
      first: false,
      last: false,
    },
    {
      id: 4,
      content: "It is is chat app 4",
      user: "self",
      first: false,
      last: true,
    },
    {
      id: 5,
      content: "It is is chat app 5",
      user: "other",
      first: true,
      last: true,
    },
    {
      id: 5,
      content: "It is is chat app 5",
      user: "self",
      first: true,
      last: true,
    },
  ];

  return (
    <MessagesBox>
      {messages.reverse().map((e) => (
        <Message key={e.id} {...e} />
      ))}
    </MessagesBox>
  );
}

const MessagesBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  flex-grow: 1;
  row-gap: 5px;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #f9f5f5;
    border-radius: 3px;

    &:hover {
      background: #bdbdbd;
    }
  }
`;
