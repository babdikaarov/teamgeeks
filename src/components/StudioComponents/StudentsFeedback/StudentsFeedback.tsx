import styles from "./_studentsFeedback.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import cards from "../../../tempData/getFeedbackData";
import StudentsFeedbackCard from "../../../UI/Cards/FeedbackCard";
import { EffectCoverflow } from "swiper/modules";
import { useCallback, useRef } from "react";
import icon from "../../../assets/icons/bigArrow";

const StudentsFeedback = () => {
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
      <SectionWrapper header={"Отзывы наших студентов"}>
         <div className={styles.feedbackContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               {icon}
            </button>
            <Swiper
               ref={sliderRef}
               className={styles.studentsSwiper}
               effect={"coverflow"}
               grabCursor
               centeredSlides
               loop
               initialSlide={2}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
               }}
               modules={[EffectCoverflow]}
               breakpoints={{
                  1440: {
                     slidesPerView: 3.5,
                     spaceBetween: -66,
                  },
                  1200: {
                     slidesPerView: 3.3,
                     spaceBetween: -35,
                  },
                  1024: {
                     slidesPerView: 3.35,
                     spaceBetween: -75,
                  },
                  892: {
                     slidesPerView: 3.3,
                     spaceBetween: -85,
                  },
                  768: {
                     slidesPerView: 2.8,
                     spaceBetween: -55,
                  },
                  658: {
                     slidesPerView: 2.3,
                     spaceBetween: -30,
                  },
                  576: {
                     slidesPerView: 2.3,
                     spaceBetween: -90,
                  },
                  482: {
                     slidesPerView: 1.5,
                     spaceBetween: -50,
                  },
                  390: {
                     slidesPerView: 1.5,
                     spaceBetween: -50,
                  },
               }}
            >
               {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                     <StudentsFeedbackCard img={card.img} name={card.name} word={card.word} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               {icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default StudentsFeedback;
