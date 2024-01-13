import styles from "./_collaboration.module.scss";
import cardsData from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
            <Swiper slidesPerView={4.7} freeMode={true}>
               {cards?.map((card, i) => (
                  <SwiperSlide key={i}>
                     <CollabCard
                        src={card.src}
                        alt={card.alt}
                        firstName={card.firstName}
                        lastName={card.lastName}
                     ></CollabCard>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className={styles.lastCardPadding}></div>
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;
