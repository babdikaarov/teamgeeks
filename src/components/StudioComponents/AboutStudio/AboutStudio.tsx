import { FC, useState } from "react";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_aboutStudio.module.scss";
import VideoComponent from "./temp/VideoComponent";

const AboutStudio: FC = () => {
   const [expanded, setExpanded] = useState(false);
   const [customHeader, setCustomHeader] = useState(false);
   const [points, setPoints] = useState(false);

   const toggleExpand = () => {
      setExpanded(!expanded);
      setCustomHeader(!customHeader);
      setPoints(!points);
   };

   return (
      <SectionWrapper
         header={customHeader ? "О студии" : "Cool Studio"}
         className={styles.coolStudio}
         id="about"
      >
         <div className={styles.AboutUsWrapper}>
            <div className={styles.TextWrapper}>
               <span>
                  В сентябре 2022 года наша студия открыла свои двери для всех желающих научиться игре на музыкальных
                  инструментах.
                  <br />
               </span>
               <span>
                  <br />
                  Изначально все задумывалась как простые барабанные курсы, но благодаря поддержке единомышленников и
                  сплочённой работе команды, студия разрослась в полноценное музыкальное сообщество, где профессионалы
                  делятся со студентами своим бесценным опытом.{points ? "" : ".."}
               </span>
               {expanded && (
                  <div className={`${styles.ExpandedText} ${expanded ? styles.expanded : ""}`}>
                     <span>
                        <br />
                        Команда CoolStudio верит, что музыка делает мир лучше, поэтому мы продолжаем работать над тем,
                        чтобы сделать ее доступной для всех. Мы создаем пространство, где наши студенты чувствуют себя
                        комфортно и уверенно, чтобы максимально раскрыть творческий потенциал каждого.
                        <br />
                     </span>
                     <span>
                        <br />
                        Cool Studio - это место, где в тебя верят, где ты можешь быть собой, где ты можешь творить и
                        мечтать. Нам уже 1 год, и это только начало
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
