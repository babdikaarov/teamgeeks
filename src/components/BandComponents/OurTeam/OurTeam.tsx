import TeamCard from "../../../UI/Cards/TeamCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_ourTeam.module.scss";
import cards from "../../../tempData/getTeamList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OurTeam = () => {
   return (
      <SectionWrapper header={"Наша команда"}>
         <div className={styles.teamCardsContainer}>
            <Swiper slidesPerView={3} spaceBetween={-550}>
               {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                     <TeamCard video={card.video} img={card.img} role={card.role} name={card.name} view={card.view} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </SectionWrapper>
   );
};

export default OurTeam;
