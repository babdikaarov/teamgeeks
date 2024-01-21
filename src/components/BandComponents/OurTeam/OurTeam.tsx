import styles from "./_ourTeam.module.scss";
import "swiper/css";
import TeamCard from "../../../UI/Cards/TeamCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import cards from "../../../tempData/getTeamList";
import icon from "../../../assets/icons/teamArrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
// FIX_ME scroll smooth bug
// import { Mousewheel } from "swiper/modules";
import useSwiperNavigation from "../../../app/hooks/useSwiperNavigation";

const OurTeam = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper header={"Наша команда"} className={styles.teamWrapper}>
         <div className={styles.teamCardsContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               <img src={icon} alt="icon" />
            </button>
            <Swiper
               ref={sliderRef}
               loop={true}
               slidesPerView={"auto"}
               spaceBetween={30}
               // FIX_ME scroll smooth bug
               // mousewheel={true}
               // modules={[Mousewheel]}
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
                  <SwiperSlide key={i} className={styles.teamSlider + " " + styles[card.view]}>
                     <TeamCard video={card.video} img={card.img} role={card.role} name={card.name} view={card.view} />
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
