import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
import { Navigation } from "swiper/modules";
import styles from "./_ourTeam.module.scss";
import "swiper/css";
import TeamCard from "../../../UI/Cards/TeamCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import cards from "../../../tempData/getTeamList";
import icon from "../../../assets/icons/teamArrow.png";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";

const OurTeam = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper header={"Наша команда"} className={styles.teamWrapper}>
         <div className={styles.teamContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               <img src={icon} alt="icon" />
            </button>
            <Swiper
               ref={sliderRef}
               spaceBetween={30}
               slidesPerView={"auto"}
               // freeMode={true}
               loop
               // modules={[FreeMode, Navigation]}
               modules={[Navigation]}
               breakpoints={{
                  440: {
                     spaceBetween: 20,
                  },
                  1: {
                     spaceBetween: 16,
                  },
               }}
            >
               {cards.map((card, i) => (
                  <SwiperSlide key={i} className={styles.cardContainer + " " + styles[card.view]}>
                     <TeamCard
                        key={i}
                        video={card.video}
                        img={card.img}
                        role={card.role}
                        name={card.name}
                        view={card.view}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               <img src={icon} alt="icon" />
            </button>
         </div>
      </SectionWrapper>
   );
};

export default OurTeam;
