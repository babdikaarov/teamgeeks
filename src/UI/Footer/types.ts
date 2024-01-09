export type ItemObject = { text: string; link: string | number };
export type ItemsOfObjects = ItemObject[];

export interface FooterBoxProps extends React.HTMLAttributes<HTMLLIElement> {
  header: string;
  items: ItemsOfObjects;
}

export interface FooterTemplateProps {
  backendData?: {
    address: {
      text: string;
      link: string;
    }[];
    contacts: {
      text: string;
      link: string | number;
    }[];
  };
  bandPage: boolean;
}
