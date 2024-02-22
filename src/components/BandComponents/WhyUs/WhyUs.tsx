// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
// styles
import styles from "./_whyus.module.scss";
// static
import staticText from "./staticData.json";

const InfoBlock: React.FC<{ title: string; text: string }> = ({ title, text }) => (
   <div className={styles.InfoBlock}>
      <img
         className={styles.icon}
         src={"/icons/checkbox.svg"}
         alt="Icon"
      />
      <div className={styles.textWrapper}>
         <div className={styles.textWhyUs}>{title}</div>
         <p className={styles.text}>{text}</p>
      </div>
   </div>
);

const WhyUs: React.FC = () => {
   return (
      <SectionWrapper
         header="Почему выбирают нас?"
         className={styles.whyUs}
      >
         <div className={styles.WhyUs}>
            <InfoBlock {...staticText.block1} />
            <InfoBlock {...staticText.block2} />
            <InfoBlock {...staticText.block3} />
            <InfoBlock {...staticText.block4} />
         </div>
      </SectionWrapper>
   );
};
export default WhyUs;
