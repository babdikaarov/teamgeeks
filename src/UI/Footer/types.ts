export type ItemObject = { text: string; link: string | number };
export type ItemsOfObjects = ItemObject[];
export enum Target {
   blank = "blank",
   noBlank = "",
}
export interface FooterBoxProps extends React.HTMLAttributes<HTMLLIElement> {
   header: string;
   items: ItemsOfObjects;
   target: Target;
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
