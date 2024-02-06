import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_ourTeam.module.scss";
import TeamCard from "../../../UI/Cards/TeamCard";
import cards from "../../../tempData/getTeamList";
import icon from "../../../assets/icons/bigArrow";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";

const OurTeam = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper
         header={"Наша команда"}
         className={styles.teamWrapper}
         id="ourteam"
      >
         <div className={styles.teamContainer}>
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {icon}
            </button>
            <Swiper
               ref={sliderRef}
               spaceBetween={30}
               slidesPerView={"auto"}
               mousewheel
               modules={[Mousewheel, Navigation]}
               breakpoints={{
                  1440: {
                     spaceBetween: 30,
                  },
                  1200: {
                     spaceBetween: 30,
                  },
                  1024: {
                     spaceBetween: 20,
                  },
                  892: {
                     spaceBetween: 20,
                  },
                  768: {
                     spaceBetween: 20,
                  },
                  576: {
                     spaceBetween: 20,
                  },
                  390: {
                     spaceBetween: 16,
                  },
                  320: {
                     spaceBetween: 16,
                  },
                  1: {
                     spaceBetween: 16,
                  },
               }}
            >
               {cards.map((card, i) => (
                  <SwiperSlide
                     key={i}
                     className={styles.cardContainer + " " + styles[card.view]}
                  >
                     <TeamCard
                        animate={i === 0}
                        video={card.video}
                        img={card.img}
                        role={card.role}
                        name={card.name}
                        view={card.view}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button
               className={styles.buttonNext}
               onClick={handleNext}
            >
               {icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default OurTeam;
