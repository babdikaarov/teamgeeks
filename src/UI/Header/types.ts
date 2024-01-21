export type lyrics = {
   lyrics: string;
};

export interface HeaderTemplateProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   bandPage: boolean;
   lyrics: string;
   NavList: React.FC<lyrics>;
}
