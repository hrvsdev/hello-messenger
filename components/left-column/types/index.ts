import { State } from "@hookstate/core";

export interface ContactType {
  id: string;
  picture: string;
  name: string;
  message: string;
  time: string;
  selectedContacts: State<string[]>;
}

export interface ContextMenuType {
  id: string;
  anchorPoint: { x: number; y: number };
  toggleMenu: Function;
  menuProps: any;
  selectedContacts: State<string[]>;
}
