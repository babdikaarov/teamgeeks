type Text = {
   header: string;
   paragraph?: string;
};

export interface HeroTemplateProps {
   video: string;
   text?: Text;
   children: React.ReactNode;
}

export interface HeroTextProps extends React.HTMLAttributes<HTMLDivElement> {
   header: string;
   paragraph?: string;
}
