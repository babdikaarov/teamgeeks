import React from "react";
import icon from "../../../assets/Tick.png";
import styles from "../../../scss/partials/coolBand/_whyus.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";

const InfoBlock: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className={styles.InfoBlockWrapper}>
    <div className={styles.InfoBlock}>
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
    <SectionWrapper header="Почему выбирают нас">
      <div className={styles.flexDiv}>
        <InfoBlock
          title="Профессионалы своего дела"
          text="Большой опыт всех участников коллектива, ответственность и креатив"
        />

        <InfoBlock
          title="Индивидуальный подход"
          text="Поможем реализовать любое пожелание к исполняемым композициям и жанру"
        />

        <InfoBlock
          title="Фирменный стиль и айдентика"
          text="Оригинальная подача и особая энергетика вкупе со сценическим образом, соответствующим вашему событию"
        />

        <InfoBlock
          title="Техническое сопровождение"
          text="Профессиональная настройка каждого инструмента, зажигательные ритмы, красочный и объемный звук"
        />
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
