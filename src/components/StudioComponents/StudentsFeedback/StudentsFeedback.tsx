import styles from "./_studentsFeedback.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import cards from "../../../tempData/getFeedbackData"
import StudentsFeedbackCard from "../../../UI/Cards/FeedbackCard";
import { EffectCoverflow } from "swiper/modules";
import { useCallback, useRef } from "react";
import icon from "../Teachers/bigArrow";


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
         <div className={styles.StudentsFeedbackSlider}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               {icon}
            </button>
               <Swiper
               ref={sliderRef}
               className={styles.studentsSwiper}
               effect={"coverflow"}
               grabCursor
               centeredSlides
               spaceBetween={-66}
               loop
               initialSlide={2}
               slidesPerView={3.5}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
               }}
               modules={[EffectCoverflow]}
               >
                  {cards.map((card, i) => (
                     <SwiperSlide key={i}>
                        <StudentsFeedbackCard  img={card.img} name={card.name} word={card.word}/>
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