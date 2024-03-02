// import { HeroTextProps } from "./types";

const HeroText: React.FC<Prop.Hero.TextProps> = ({ header = "", paragraph = "", className }) => {
   if (header.length === 0) return;
   if (paragraph === "-") {
      paragraph = "";
   }
   return (
      <div className={className}>
         <h1>{header}</h1>
         <div>{paragraph}</div>
      </div>
   );
};

export default HeroText;
