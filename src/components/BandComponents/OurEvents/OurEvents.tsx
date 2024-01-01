import getEventCards from "../../../tempData/getEventCards";
import styles from "../../../scss/partials/coolBand/_ourevents.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "../../../UI/buttons/ButtonWithArrow";
import OurEventsCard from "../../../UI/Cards/OurEventsCard";

const OurEvents = () => {
  const ourEventsCards = [...getEventCards, ...getEventCards];

  return (
    <SectionWrapper header={"Наши мероприятия"} className={styles.ourEvent}>
      <div className={styles.sliderEventsContainer}>
        <div className={styles.sliderEvents}>
          {ourEventsCards.map((card, i) => (
            <OurEventsCard key={i} src={card.src} alt={card.alt} />
          ))}
        </div>
      </div>
      <ButtonWithArrow text="Подробнее" to={"/gallery"} />
    </SectionWrapper>
  );
};

export default OurEvents;
