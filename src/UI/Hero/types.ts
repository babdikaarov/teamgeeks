type Text = {
  header: string;
  paragraph?: string;
};
export interface HeroTemplateProps {
  contacts?: string;
  video: {
    src: string;
    type: string;
  };
  image: {
    src: string;
    alt: string;
  };
  text?: Text;
  children: React.ReactNode;
}

export interface HeroTextProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  paragraph?: string;
}
