import { FC } from "react";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "../../../UI/Hero/_hero.module.scss";

interface HeroTextProps {
   header: string;
   paragraph: string;
}

const HeroText: FC<HeroTextProps> = ({ header, paragraph }) => {
   return (
      <SectionWrapper className={styles.heroStudio}>
         <div className={styles.text}>
            <h1 className={styles.heroH1}>{header}</h1>
            <h6 className={styles.paragraph}>{paragraph}</h6>
         </div>
      </SectionWrapper>
   );
};

export default HeroText;
