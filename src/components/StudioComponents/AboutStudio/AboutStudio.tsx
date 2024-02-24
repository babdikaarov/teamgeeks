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
         id="about"
      >
         <div
            ref={refToogle}
            className={styles.AboutUsWrapper}
         >
            <div className={styles.TextWrapper}>
               <span>
                  {staticText.text1}
                  <br />
               </span>
               <span>
                  <br />
                  {staticText.text2}
                  {expanded ? "" : ".."}
               </span>
               {expanded && (
                  <div className={`${styles.ExpandedText} ${expanded ? styles.expanded : ""}`}>
                     <span>
                        <br />
                        {staticText.text3}
                        <br />
                     </span>
                     <span>
                        <br />
                        {staticText.text4}
                     </span>
                  </div>
               )}
               <button
                  className={`${styles.ExpandButton} ${expanded ? styles.CollapseButton : styles.MoreButton}`}
                  onClick={toggleExpand}
               >
                  {expanded ? "Свернуть" : "еще"}
               </button>
            </div>
            <VideoComponent />
         </div>
      </SectionWrapper>
   );
};

export default AboutStudio;
