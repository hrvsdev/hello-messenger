import styled from "styled-components";
import { MenuItem, ControlledMenu } from "@szhsin/react-menu";

import { BiCheckCircle, BiTrashAlt, BiArchive } from "react-icons/bi";
import { BiBellOff, BiMessageSquareDots } from "react-icons/bi";

import { ContextMenuType } from "../types";
import { addOrRemove } from "../utils";

export default function ContextMenu(props: ContextMenuType): JSX.Element {
  const { anchorPoint, toggleMenu, menuProps } = props;
  const { id, selectedContacts } = props;

  // Select button action
  const select = () => {
    selectedContacts.set((prev) => addOrRemove(prev, id));
  };

  return (
    <Menu
      {...menuProps}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
    >
      <MenuItem onClick={select}>
        <BiCheckCircle /> Select
      </MenuItem>
      <MenuItem>
        <BiArchive /> Archive
      </MenuItem>
      <MenuItem>
        <BiBellOff /> Mute
      </MenuItem>
      <MenuItem>
        <BiMessageSquareDots /> Mark as unread
      </MenuItem>
      <MenuItem className="delete">
        <BiTrashAlt /> Delete
      </MenuItem>
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
    column-gap: 18px;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    height: 36px;
    outline: 0;

    svg {
      color: rgb(112, 117, 121);
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: #f4f4f4;
    }

    &.delete,
    &.delete svg {
      color: #ef4444;
    }
  }
`;
