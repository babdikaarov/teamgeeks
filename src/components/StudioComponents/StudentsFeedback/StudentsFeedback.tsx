import styles from "./_studentsFeedback.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import cards from "../../../tempData/getFeedbackData"
import StudentsFeedbackCard from "../../../UI/Cards/FeedbackCard";
import { EffectCoverflow } from "swiper/modules";

const StudentsFeedback = () => {
   return (
      <SectionWrapper header={"Отзывы наших студентов"}>
         <div className={styles.StudentsFeedbackSlider}>
            <Swiper
            effect={"coverflow"}
            grabCursor
            centeredSlides
            spaceBetween={-64}
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
            slideToClickedSlide
            >
               {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                  <StudentsFeedbackCard  img={card.img} name={card.name} word={card.word}/>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </SectionWrapper>
   );
};

export default StudentsFeedback;
