import TeamCard from "../../../UI/Cards/TeamCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_ourTeam.module.scss";
import cards from "../../../tempData/getTeamList";
import icon from "../../../assets/icons/teamArrow.png"
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const OurTeam = () => {
   
   const sliderRef = useRef(null);

   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slidePrev();
   }, []);
   
   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slideNext();
   }, []);
   return (
      <SectionWrapper header={"Наша команда"} id={styles.teamWrapper}>
         <div className={styles.teamCardsContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               <img src={icon} alt="icon"/>
            </button>
            <Swiper
            ref={sliderRef}
            className={styles.teamSlider}
            breakpoints={{
               1440: {
                  slidesPerView: 3,
                  spaceBetween: -550
               },
               1200: {
                  slidesPerView: 3,
                  spaceBetween: -290
               },
               1024: {
                  slidesPerView: 2,
                  spaceBetween: -430
               },
               892: {
                  slidesPerView: 2,
                  spaceBetween: -310
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: -210
               },
               658: {
                  slidesPerView: 2,
                  spaceBetween: -110
               },
               576: {
                  slidesPerView: 1,
                  spaceBetween: -260
               },
               482: {
                  slidesPerView: 1,
                  spaceBetween: -230
               },
               390: {
                  slidesPerView: 1,
                  spaceBetween: -140
               }
            }}
            >
               {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                  <TeamCard video={card.video} img={card.img} role={card.role} name={card.name} view={card.view} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               <img src={icon} alt="icon"/>
            </button>
         </div>
      </SectionWrapper>
   );
};


export default OurTeam;