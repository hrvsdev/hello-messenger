import styled from "styled-components";

export default function NewChatButton(): JSX.Element {
  return <ButtonWrapper>NewChatButton</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  box-shadow: 0 0 0 1px black;
  padding: 8px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
