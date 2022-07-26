export interface MessageType {
    id: string | number,
    content: string,
    user: string | boolean,
    first: boolean,
    last: boolean,
}


export interface ContextMenuType {
    id: string | number;
    anchorPoint: { x: number; y: number };
    toggleMenu: Function;
    menuProps: any;
  }
  