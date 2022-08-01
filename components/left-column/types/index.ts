export interface ContactType {
  id: string;
  picture: string;
  name: string;
  message: string;
  time: string;
  selectedContacts: string[];
  setSelectedContacts: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ContextMenuType {
  id: string;
  anchorPoint: { x: number; y: number };
  toggleMenu: Function;
  menuProps: any;
  setSelectedContacts: React.Dispatch<React.SetStateAction<string[]>>;
}
