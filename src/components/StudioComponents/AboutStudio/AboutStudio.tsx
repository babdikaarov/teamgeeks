// modules
import { useState } from "react";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import VideoComponent from "./VideoComponent";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
// styles
import styles from "./_aboutStudio.module.scss";
// static
import staticText from "./staticData.json";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";

const AboutStudio: React.FC = () => {
   const [expanded, setExpanded] = useState(false);
   const { refToogle } = useToggleActiveNavigation(EBlockID.ABOUTSTUDIO);

   const toggleExpand = () => {
      setExpanded(!expanded);
   };

   return (
      <SectionWrapper
         header={expanded ? "О студии" : "Cool Studio"}
         className={styles.coolStudio}
         id={EBlockID.ABOUTSTUDIO}
      >
         <article ref={refToogle} className={styles.AboutUsWrapper}>
            <article className={styles.TextWrapper}>
               <p>
                  {staticText.text1}
                  <br />
               </p>
               <p>
                  <br />
                  {staticText.text2}
                  {expanded ? "" : ".."}
               </p>
               {expanded && (
                  <article className={`${styles.ExpandedText} ${expanded ? styles.expanded : ""}`}>
                     <p>
                        <br />
                        {staticText.text3}
                        <br />
                     </p>
                     <p>
                        <br />
                        {staticText.text4}
                     </p>
                  </article>
               )}
               <button
                  className={`${styles.ExpandButton} ${expanded ? styles.CollapseButton : styles.MoreButton}`}
                  onClick={toggleExpand}
               >
                  {expanded ? "Свернуть" : "еще"}
               </button>
            </article>
            <VideoComponent />
         </article>
      </SectionWrapper>
   );
};

export default AboutStudio;
