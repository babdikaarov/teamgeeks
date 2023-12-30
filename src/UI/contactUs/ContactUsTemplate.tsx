import { FC, ReactNode } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import TwoGis from "../map/TwoGis";
import styles from "../../scss/partials/ui/_contactUsTemplate.module.scss";

interface ContactUsTemplateProps {
  heading: string;
  secondHeading?: string;
  paragraph: string[];
  button: ReactNode;
}

const ContactUsTemplate: FC<ContactUsTemplateProps> = ({ heading, secondHeading, paragraph, button }) => {
  return (
    <SectionWrapper>
      <div className={styles.mapContent}>
        <div className={styles.textContainer}>
          <h2>{heading}</h2>
          <div className={styles.text}>
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
