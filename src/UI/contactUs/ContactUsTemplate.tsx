import SectionWrapper from "../SectionWrapper/SectionWrapper";
import TwoGis from "../map/TwoGis";
import styles from "./_contactUsTemplate.module.scss";

const ContactUsTemplate: React.FC<Prop.ContactUsTemplate> = ({ heading, secondHeading, paragraph, button }) => {
   return (
      <SectionWrapper>
         <div className={styles.mapContent}>
            <div className={styles.textContainer}>
               <div className={styles.text}>
                  <h2>{heading}</h2>
                  {secondHeading && <h3>{secondHeading}</h3>}
                  {paragraph.map((p, i) => (
                     <p key={i}>{p}</p>
                  ))}
               </div>
               {button}
            </div>
            <div className={styles.map}>
               <TwoGis />
            </div>
         </div>
      </SectionWrapper>
   );
};

export default ContactUsTemplate;
