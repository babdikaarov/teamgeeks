import { FC, useState } from "react";
import CoolStudio from "../../../assets/CoolStudio.png";
import styles from "../../../scss/partials/coolStudio/_aboutStudio.module.scss";

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
      <div className="container">
         <h2 className={styles.AboutUsH2}>{customHeader ? "О студии" : "Cool Studio"}</h2>
         <div className={styles.AboutUsWrapper}>
            <div className={styles.TextWrapper}>
               <span>
                  В сентябре 2022 года наша студия открыла свои <br />
                  двери для всех желающих научиться игре на <br />
                  музыкальных инструментах. <br />
                  <br />
                  Изначально все задумывалась как простые барабанные <br />
                  курсы, но благодаря поддержке единомышленников <br />
                  и сплочённой работе команды, студия разрослась <br />
                  в полноценное музыкальное сообщество, где <br />
                  профессионалы делятся со студентами своим бесценным <br />
                  опытом{points ? "..." : ""}
               </span>
               {expanded && (
                  <div className={`${styles.ExpandedText} ${expanded ? styles.expanded : ""}`}>
                     <br />
                     Команда CoolStudio верит, что музыка делает мир лучше, поэтому мы продолжаем работать над тем,
                     чтобы сделать ее доступной для всех. Мы создаем пространство, где наши студенты чувствуют себя
                     комфортно и уверенно, чтобы максимально раскрыть творческий потенциал каждого. <br />
                     <br />
                     Cool Studio - это место, где в тебя верят, где ты можешь быть собой, где ты можешь творить и
                     мечтать. Нам уже 1 год, и это только начало
                  </div>
               )}
               <button
                  className={`${styles.ExpandButton} ${expanded ? styles.CollapseButton : styles.MoreButton}`}
                  onClick={toggleExpand}
               >
                  {expanded ? "Свернуть" : "еще"}
               </button>
            </div>
            <img className={styles.AboutUsImg} src={CoolStudio} alt="Cool Studio" />
         </div>
      </div>
   );
};

export default AboutStudio;