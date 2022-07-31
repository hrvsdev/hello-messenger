export interface ContactType {
  id: string;
  picture: string;
  name: string;
  message: string;
  time: string;
}

export interface ContextMenuType {
  anchorPoint: { x: number; y: number };
  toggleMenu: Function;
  menuProps: any;
}
