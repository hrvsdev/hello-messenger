export interface ContactType {
  id: string;
  picture: string;
  name: string;
  message: string;
  time: string;
  selection: boolean;
  setSelection: React.Dispatch<React.SetStateAction<boolean>>;
  selectedContacts: string[];
  setSelectedContacts: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ContextMenuType {
  id: string;
  anchorPoint: { x: number; y: number };
  toggleMenu: Function;
  menuProps: any;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedContacts: React.Dispatch<React.SetStateAction<string[]>>;
}
