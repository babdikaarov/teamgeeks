import { FC, ReactNode } from "react";
import styles from "../../scss/partials/ui/_hero.module.scss";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
interface HeroTemplateProps {
   contacts: string;
   video: {
      src: string;
      type: string;
   };
   image: {
      src: string;
      alt: string;
   };
   children: ReactNode;
   header?: string;
}
const HeroTemplate: FC<HeroTemplateProps> = ({ video, children }) => {
   return (
      <SectionWrapper className={styles.hero}>
         <video muted autoPlay loop id="videoTag">
            <source src={video.src} type={video.type} />
         </video>
         {children}
      </SectionWrapper>
   );
};

export default HeroTemplate;
