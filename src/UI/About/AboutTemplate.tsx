import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./_aboutTemplate.module.scss";
import ImageLoader from "../ImageLoader/ImageLoader";
import { EBlockID } from "../../types";
import useToggleActiveNavigation from "../../modules/hooks/useToggleActiveNavigation";

interface AboutTemplateProps {
   header: string;
   text: string;
   poster: string;
}

const AboutTemplate: React.FC<AboutTemplateProps> = ({ header, poster, text }) => {
   const { ref } = useToggleActiveNavigation(EBlockID.About);

   return (
      <SectionWrapper
         className={styles.aboutBand}
         header={header}
         id={EBlockID.About}
      >
         <div
            ref={ref}
            className={styles.about}
         >
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
