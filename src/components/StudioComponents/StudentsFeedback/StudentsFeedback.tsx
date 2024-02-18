// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getStudentReviwes } from "../../../store/studentsFeedbackThunk";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import StudentsFeedbackCard from "./FeedbackCard";
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_studentsFeedback.module.scss";


const StudentsFeedback = () => {
   const dispatch = useAppDispatch()
   const data = useAppSelector(state => state.getStudentReviwes.data)!
   useEffect(() => {
      dispatch(getStudentReviwes())
   }, [dispatch]) 
   
   return (
      <SectionWrapper header={"Отзывы наших студентов"}>
         <div className={styles.feedbackContainer}>
            <NavigationButton id="FeedbackPrev"/>
            <Swiper
               className={styles.feedbackSwiper}
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
               freeMode
               mousewheel={{
                  forceToAxis: true,
               }}
               navigation={{ nextEl: "#FeedbackNext", prevEl: "#FeedbackPrev" }}
               modules={[Mousewheel, Navigation, FreeMode, EffectCoverflow]}
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
                  1: {
                     slidesPerView: 1.3,
                     spaceBetween: -40,
                  }
               }}
            >
               {data.map((card, i) => (
                  <SwiperSlide key={i}>
                     <StudentsFeedbackCard
                        img={card.image}
                        name={card.name}
                        word={card.reviews}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <NavigationButton id="FeedbackNext"/>
         </div>
      </SectionWrapper>
   );
};

export default StudentsFeedback;
