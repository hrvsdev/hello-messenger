import styled from "styled-components";

import { MenuItem, ControlledMenu } from "@szhsin/react-menu";

import { ContextMenuType } from "../types";

export default function ContextMenu(props: ContextMenuType): JSX.Element {
  const { anchorPoint, toggleMenu, menuProps } = props;

  return (
    <Menu
      {...menuProps}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
    >
      <MenuItem>Select</MenuItem>
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
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding: 8px;
    border-radius: 12px;
    width: 150px;
  }

  li {
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    height: 32px;
    outline: 0;

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;
