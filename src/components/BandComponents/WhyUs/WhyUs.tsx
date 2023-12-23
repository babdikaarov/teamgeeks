import React from "react";
import icon from "../../../assets/Tick.png";
import styles from "../../../scss/partials/coolBand/_whyus.module.scss";

const InfoBlock: React.FC<{ title: string; text: string }> = ({ title, text }) => (
   <div className={styles.info}>
      <div className={styles.infoBlock}>
         <div className={styles.textH3}>
            <img className={styles.icon} src={icon} alt="Icon" />
            {title}
         </div>
      </div>
      <div className={styles.text}>{text}</div>
   </div>
);

const WhyUs: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         <h2 className={styles.WhyUs}>Почему выбирают нас?</h2>
         <div className={`container ${styles.flexDiv}`}>
            <div className={styles.info1}>
               <InfoBlock
                  title="Профессионалы своего дела"
                  text="Большой опыт всех участников коллектива, ответственность и креатив"
               />
            </div>
            <div className={styles.info2}>
               <InfoBlock
                  title="Индивидуальный подход"
                  text="Поможем реализовать любое пожелание к исполняемым композициям и жанру"
               />
            </div>
            <div className={styles.info3}>
               <InfoBlock
                  title="Фирменный стиль и айдентика"
                  text="Оригинальная подача и особая энергетика вкупе со сценическим образом, соответствующим вашему событию"
               />
            </div>
            <div className={styles.info4}>
               <InfoBlock
                  title="Техническое сопровождение"
                  text="Профессиональная настройка каждого инструмента, зажигательные ритмы, красочный и объемный звук"
               />
            </div>
         </div>
      </div>
   );
};

export default WhyUs;
