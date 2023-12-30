import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "../../../scss/partials/coolBand/_coolshowband.module.scss";
import { aboutData } from "./getAboutData";
const CoolShowBand = () => {
  return (
    <SectionWrapper header="Cool Show band" id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <p>{aboutData.text}</p>
        </article>
        <img src={aboutData.poster} alt="About Poster" />
      </div>
    </SectionWrapper>
  );
};
export default CoolShowBand;
