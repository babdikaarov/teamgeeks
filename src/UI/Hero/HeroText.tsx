// import { HeroTextProps } from "./types";

const HeroText: React.FC<Prop.Hero.TextProps> = ({ header = "", paragraph = "", className }) => {
   if (header.length === 0) return;
   return (
      <div className={className}>
         <h1>{header}</h1>
         <h6>{paragraph}</h6>
      </div>
   );
};

export default HeroText;
