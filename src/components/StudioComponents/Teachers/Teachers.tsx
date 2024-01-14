import React, { useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import getTeachersData from "../../../tempData/getTeachersData";
import styles from "./_teacher.module.scss";
import icon from "./bigArrow";
import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";
import TeacherCard from "../../../UI/Cards/TeacherCard";
import Modal from "./Modal"; // Импортируем компонент модального окна

const Teachers = () => {
   const [selectedTeacher, setSelectedTeacher] = useState(null);
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

   const openModal = useCallback((teacher) => {
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
            <Swiper ref={sliderRef} slidesPerView={4} loop={true} className={styles.teacherSwiper}>
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
