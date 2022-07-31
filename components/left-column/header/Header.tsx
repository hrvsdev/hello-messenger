import styled from "styled-components";

import { FiMenu, FiSearch } from "react-icons/fi";

export default function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <MenuIcon>
        <FiMenu />
      </MenuIcon>
      <SearchWrapper>
        <FiSearch />
        <Input placeholder="Search" />
      </SearchWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 7px 8px;
  padding-right: 14px
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: #5a5a5a;
  transition: background 250ms;

  &:hover {
    background: #f4f4f4;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  svg {
    position: absolute;
    color: #939393;
    left: 15px;
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  background-color: #f4f4f4;
  height: 42px;
  border-radius: 21px;
  padding-left: 46px;
  font-weight: 500;

  &::placeholder{
    color: #939393;
  }
`;
