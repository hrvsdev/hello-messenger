import styled from "styled-components";
import { MenuItem, ControlledMenu } from "@szhsin/react-menu";

import { BiCheckCircle } from "react-icons/bi";

import { ContextMenuType } from "../types";

export default function ContextMenu(props: ContextMenuType): JSX.Element {
  const { anchorPoint, toggleMenu, menuProps } = props;

  return (
    <Menu
      {...menuProps}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
    >
      <MenuItem>
        <BiCheckCircle /> Select
      </MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>View</MenuItem>
    </Menu>
  );
}

const Menu = styled(ControlledMenu)`
  ul {
    z-index: 1;
    background: rgba(255, 255, 255, 0.733);
    backdrop-filter: blur(10px);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 8px;
    border-radius: 12px;
    width: 200px;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 15px;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    height: 36px;
    outline: 0;

    svg {
      color: rgb(112, 117, 121);
      width: 21px;
      height: 21px;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;
