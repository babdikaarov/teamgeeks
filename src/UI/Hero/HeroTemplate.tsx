import SectionWrapper from "../SectionWrapper/SectionWrapper";
import HeroText from "./HeroText";
import styles from "./_hero.module.scss";
import { HeroTemplateProps } from "./types";

const HeroTemplate: React.FC<HeroTemplateProps> = ({ video, text, children }) => {
   return (
      <SectionWrapper className={styles.hero}>
         <video muted autoPlay loop id="videoTag">
            <source src={video.src} type={video.type} />
         </video>
         {text && <HeroText header={text.header} className={styles.textPosition} />}
         {children}
      </SectionWrapper>
   );
};

export default HeroTemplate;
