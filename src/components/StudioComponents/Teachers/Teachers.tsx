import TeacherCard from "../../../UI/Cards/TeacherCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import getTeachersData from "../../../tempData/getTeachersData";
import styles from "./_teacher.module.scss";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useCallback, useRef } from "react";
import icon from "./bigArrow";
import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";
import Modal from "./Modal";
import { TeacherType } from "./types";

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherType | null>(null);
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const openModal = useCallback((teacher: TeacherType) => {
    setSelectedTeacher(teacher);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedTeacher(null);
  }, []);

  return (
    <SectionWrapper header="Преподаватели" id="teachers">
      <div className={styles.teacherContainer}>
        <button className={styles.buttonPrev} onClick={handlePrev}>
          {icon}
        </button>
        <Swiper
          ref={sliderRef}
          loop={true}
          className={styles.teacherSwiper}
          spaceBetween={"18px"}
          breakpoints={{
            1440: {
              slidesPerView: 3.85,
            },
            1200: {
              slidesPerView: 3.9,
            },
            1024: {
              slidesPerView: 3.95,
            },
            892: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2.78,
            },
            658: {
              slidesPerView: 2.85,
            },
            576: {
              slidesPerView: 1.55,
            },
            482: {
              slidesPerView: 1.9,
            },
            390: {
              slidesPerView: 1.9,
            },
          }}
        >
          {getTeachersData.map((card, i) => (
            <SwiperSlide key={i} onClick={() => openModal(card)}>
              <TeacherCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.buttonNext} onClick={handleNext}>
          {icon}
        </button>
      </div>
      <StudioContactUsButton whatsapp={""} />
      {selectedTeacher && <Modal teacher={selectedTeacher} closeModal={closeModal} />}
    </SectionWrapper>
  );
};

export default Teachers;
