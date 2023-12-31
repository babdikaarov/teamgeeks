import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "../../scss/partials/ui/_aboutTemplate.module.scss";
import { FC } from "react";

interface AboutTemplateProps {
  header: string;
  data: {
    text: string;
    poster: string;
  };
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, data }) => {
  return (
    <SectionWrapper header={header} id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <div className={styles.truncate}>
            {data.text
              .split(".")
              .slice(0, -1)
              .map((newLine, i) => (
                <p key={i} className={styles.text}>
                  {newLine + "."}
                </p>
              ))}
          </div>

          <input className={styles.expandBtn} type="checkbox" />
        </article>
        <img src={data.poster} alt="About Poster" />
      </div>
    </SectionWrapper>
  );
};

export default AboutTemplate;
