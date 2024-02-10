import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_studentsFeedback.module.scss";
import StudentsFeedbackCard from "../../../UI/Cards/FeedbackCard";
import cards from "../../../tempData/getFeedbackData";
import icon from "../../../assets/icons/bigArrow";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";

const StudentsFeedback = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper header={"Отзывы наших студентов"}>
         <div className={styles.feedbackContainer}>
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {icon}
            </button>
            {/* <Swiper
               ref={sliderRef}
               className={styles.feedbackSwiper}
               effect={"coverflow"}
               grabCursor
               centeredSlides
               loop
               slidesPerView={3}
               spaceBetween={6}
               initialSlide={2}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
               }}
               modules={[EffectCoverflow]}
               
            >
               {cards.map((card, i) => (
                  <SwiperSlide key={i}> */}
                     <StudentsFeedbackCard
                        img={cards[1].img}
                        name={cards[1].name}
                        word={cards[1].word}
                     />
                  {/* </SwiperSlide>
               ))}
            </Swiper> */}
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

export default StudentsFeedback;
