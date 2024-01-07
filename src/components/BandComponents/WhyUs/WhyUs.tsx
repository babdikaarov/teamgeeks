import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import icon from "../../../assets/Tick.png";
import styles from "./_whyus.module.scss";

const InfoBlock: React.FC<{ title: string; text: string }> = ({ title, text }) => (
   <div className={styles.InfoBlock}>
      <img className={styles.icon} src={icon} alt="Icon" />
      <div className={styles.textWrapper}>
         <h4 className={styles.textWhyUs}>{title}</h4>
         <p className={styles.text}>{text}</p>
      </div>
   </div>
);

const WhyUs: React.FC = () => {
   return (
      <SectionWrapper header="Почему выбирают нас?" className={styles.whyUs}>
         <div className={styles.WhyUs}>
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
