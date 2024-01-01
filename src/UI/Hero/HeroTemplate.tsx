import { FC, ReactNode } from "react";
import styles from "../../scss/partials/ui/_hero.module.scss";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import HeroText from "./HeroText";

type Text = {
   header: string;
   paragraph: string;
};
interface HeroTemplateProps {
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
   children: ReactNode;
}
const HeroTemplate: FC<HeroTemplateProps> = ({ video, text, children }) => {
   return (
      <SectionWrapper className={styles.hero}>
         <video muted autoPlay loop id="videoTag">
            <source src={video.src} type={video.type} />
         </video>
         {text && <HeroText header={text.header} paragraph={text.paragraph} className={styles.textPosition} />}
         {children}
      </SectionWrapper>
   );
};

export default HeroTemplate;
