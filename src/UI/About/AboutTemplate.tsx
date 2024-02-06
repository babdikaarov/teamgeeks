import { FC } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./_aboutTemplate.module.scss";
import ImageLoader from "../ImageLoader/ImageLoader";

interface AboutTemplateProps {
   header: string;
   text: string;
   poster: string;
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, poster, text }) => {
   return (
      <SectionWrapper
         className={styles.aboutBand}
         header={header}
         id="about"
      >
         <div className={styles.about}>
            <article className={styles.article}>
               <div className={styles.truncate}>
                  {text.split(/(?<=[.!?])\s+/).map((newLine, i) => (
                     <p
                        key={i}
                        className={styles.text}
                     >
                        {newLine}
                     </p>
                  ))}
               </div>
            </article>
            <ImageLoader src={poster} />
         </div>
      </SectionWrapper>
   );
};

export default AboutTemplate;
