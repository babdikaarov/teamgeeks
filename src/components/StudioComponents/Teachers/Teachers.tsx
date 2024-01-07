/* eslint-disable @typescript-eslint/ban-ts-comment */
import TeacherCard from "../../../UI/Cards/TeacherCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import getTeachersData from "../../../tempData/getTeachersData";
import styles from "./_teacher.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef } from "react";
import icon from "./bigArrow";
import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";

const Teachers = () => {
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
    <SectionWrapper header="Преподаватели" id="teachers">
      <div className={styles.teacherContainer}>
        <button className={styles.buttonPrev} onClick={handlePrev}>
          {icon}
        </button>
        <Swiper ref={sliderRef} slidesPerView={4} loop={true} className={styles.teacherSwiper}>
          {getTeachersData.map((card, i) => (
            <SwiperSlide key={i}>
              <TeacherCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.buttonNext} onClick={handleNext}>
          {icon}
        </button>
      </div>
      <StudioContactUsButton />
    </SectionWrapper>
  );
};

export default Teachers;
