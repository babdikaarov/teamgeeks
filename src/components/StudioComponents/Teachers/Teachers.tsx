import TeacherCard from "../../../UI/Cards/TeacherCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import getTeachersData from "../../../tempData/getTeachersData";
import styles from "./_teacher.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useCallback } from "react";
import icon from "../../../assets/icons/bigArrow";
import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";
import Modal from "./Modal";
import { TeacherType } from "./types";
import useSwiperNavigation from "../../../app/hooks/useSwiperNavigation";

const Teachers = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();
   const [selectedTeacher, setSelectedTeacher] = useState<TeacherType | null>(null);

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
               slidesPerView={"auto"}
               breakpoints={{
                  1024: {
                     spaceBetween: 53,
                  },
                  440: {
                     spaceBetween: 20,
                  },
                  1: {
                     spaceBetween: 16,
                  },
               }}
            >
               {getTeachersData.map((card, i) => (
                  <SwiperSlide key={i} onClick={() => openModal(card)} className={styles.cardSwiperTeacher}>
                     <TeacherCard {...card} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               {icon}
            </button>
         </div>
         <StudioContactUsButton whatsapp={""} className={styles.marginAuto} />
         {selectedTeacher && <Modal teacher={selectedTeacher} closeModal={closeModal} />}
      </SectionWrapper>
   );
};

export default Teachers;
