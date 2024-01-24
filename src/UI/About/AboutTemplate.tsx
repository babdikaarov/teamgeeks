import { useState } from "react";
import { FC } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./_aboutTemplate.module.scss";

interface AboutTemplateProps {
  header: string;
  text: string;
  poster: string;
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, poster, text }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SectionWrapper className={styles.aboutBand} header={header} id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <div className={styles.truncate}>
            {text.split(/(?<=[.!?])\s+/).map((newLine, i) => (
              <p key={i} className={styles.text}>
                {newLine}
              </p>
            ))}
          </div>
        </article>
        <div className={styles.imageContainer}>
          {!imageLoaded && (
            <div className={styles.loadingBox}>
            </div>
          )}
          <img
            src={poster}
            alt="About Poster"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutTemplate;
