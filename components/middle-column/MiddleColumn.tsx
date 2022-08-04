import styled from "styled-components";
import Header from "./header";

export default function MiddleColumn(): JSX.Element {
  return (
    <MiddleColWrapper>
      <Header />
    </MiddleColWrapper>
  );
}

const MiddleColWrapper = styled.div`
  flex-grow: 1;
`;
