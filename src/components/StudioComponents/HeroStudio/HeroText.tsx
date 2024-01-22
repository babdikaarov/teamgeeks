import { FC } from "react";
import styles from "../../../UI/Hero/_hero.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";

interface HeroTextProps {
   header: string;
}

const HeroText: FC<HeroTextProps> = ({ header }) => {
   return (
      <SectionWrapper className={styles.heroStudio}>
         <div className={styles.text}>
            <h1 className={styles.heroH1}>{header}</h1>
         </div>
      </SectionWrapper>
   );
};

export default HeroText;
