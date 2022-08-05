import styled from "styled-components";

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Left></Left>
      <Right></Right>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  flex-shrink: 0;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const 