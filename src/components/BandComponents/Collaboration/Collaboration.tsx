import styles from "../../../scss/partials/coolBand/_collaboration.module.scss";
import cards from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";

const Collaboration = () => {
  return (
    <SectionWrapper header={"Коллаборации"} id="collaboration">
      <div className={styles.collabCardsContainer}>
        {cards.map((card, i) => (
          <CollabCard
            key={i}
            src={card.src}
            alt={card.alt}
            firstName={card.firstName}
            lastName={card.lastName}
          ></CollabCard>
        ))}
        <div className={styles.lastCardPadding}></div>
      </div>
    </SectionWrapper>
  );
};

export default Collaboration;
