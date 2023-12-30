import { FC } from "react";

interface HeroTextProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  paragraph: string;
}

const HeroText: FC<HeroTextProps> = ({ header, paragraph, className }) => {
  if (header.length === 0) return;
  return (
    <div className={className}>
      <h1>{header}</h1>
      <h6>{paragraph}</h6>
    </div>
  );
};

export default HeroText;
