import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "../../scss/partials/ui/_aboutTemplate.module.scss";
import { FC, useEffect, useState } from "react";

interface AboutTemplateProps {
  header: string;
  data:
    | {
        text: string;
        poster: Promise<typeof import("*.jpg")>;
      }
    | undefined;
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, data }) => {
  const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    data?.poster.then((importedSrc) => setResolvedSrc(importedSrc.default));
  }, [data?.poster]);
  return (
    <SectionWrapper header={header} id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <div className={styles.truncate}>
            {data?.text
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
        <img src={resolvedSrc} alt="About Poster" />
      </div>
    </SectionWrapper>
  );
};

export default AboutTemplate;
