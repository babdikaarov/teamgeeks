import styles from "./_collaboration.module.scss";
import cardsData from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";

const Collaboration = () => {
  return (
    <SectionWrapper header={"Коллаборации"} id="collaboration" className={styles.collab}>
      <div className={styles.collabContainer}>
        {cardsData.map((card, i) => (
          <CollabCard
            key={i}
            src={card.src}
            alt={card.alt}
            firstName={card.firstName}
            lastName={card.lastName}
            view={card.view}
          ></CollabCard>
        ))}
        <div className={styles.lastCardPadding}></div>
      </div>
    </SectionWrapper>
  );
};

export default Collaboration;
