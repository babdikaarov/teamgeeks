// modules
import { useEffect, useState } from "react";
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
   const [initialSlide, setInitialSlide] = useState<number>(1);
   const dispatch = useAppDispatch();
   const { data, getLoading } = useAppSelector((state) => state.getStudentReviwes)!;
   useEffect(() => {
      dispatch(getStudentReviwes());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);
   useEffect(() => {
      if (!data) return;
      if (data.length > 0) {
         setInitialSlide(Math.floor(data.length / 2));
      }
   }, [data]);

   return (
      <SectionWrapper header={"Отзывы наших студентов"}>
         <div className={styles.feedbackContainer}>
            <NavigationButton id="FeedbackPrev" />
            {!getLoading && (
               <Swiper
                  key={initialSlide}
                  className={styles.feedbackSwiper}
                  effect={"coverflow"}
                  grabCursor
                  centeredSlides
                  loop
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
                     },
                  }}
               >
                  {data?.map((card, i) => (
                     <SwiperSlide key={i}>
                        <StudentsFeedbackCard
                           img={card.image}
                           name={card.name}
                           word={card.reviews}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
            <NavigationButton id="FeedbackNext" />
         </div>
      </SectionWrapper>
   );
};

export default StudentsFeedback;
