import styles from "../../../scss/partials/coolBand/_collaboration.module.scss";
import cardsData from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";
import { useEffect, useState } from "react";

type Cards = {
  src: Promise<typeof import("*.png")>;
  alt: string;
  firstName: string;
  lastName: string;
}[];
const Collaboration = () => {
  const [cards, setCards] = useState<Cards>();
  useEffect(() => {
    const loadCards = async () => {
      await new Promise(cardsData).then((imported) => setCards(imported));
    };

    loadCards();
  }, []);
  return (
    <SectionWrapper header={"Коллаборации"} id="collaboration">
      <div className={styles.collabCardsContainer}>
        {cards?.map((card, i) => (
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
