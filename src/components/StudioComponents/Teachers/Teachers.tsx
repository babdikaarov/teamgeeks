// modules
import { useState, useCallback } from "react";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// SWIPER.JS
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// Components
import SharedButton from "../../../UI/Buttons/SharedButton";
import Modal from "./Modal";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import TeacherCard from "./TeacherCard";
import icon from "../../../assets/icons/bigArrow";
// styles
import styles from "./_teacher.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
// FIX_ME replace staticData when backend ready
import getTeachersData from "../../../tempData/getTeachersData";
import contacts from "../../../tempData/contacts.json";

const Teachers = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();
   const [selectedTeacher, setSelectedTeacher] = useState<Prop.Teachers.TeacherType | null>(null);
   const { refToogle } = useToggleActiveNavigation(EBlockID.TEACHERS);

   const openModal = useCallback((teacher: Prop.Teachers.TeacherType) => {
      setSelectedTeacher(teacher);
   }, []);

   const closeModal = useCallback(() => {
      setSelectedTeacher(null);
   }, []);

   return (
      <SectionWrapper
         header="Команда Cool  Studio"
         id="teachers"
      >
         <div
            ref={refToogle}
            className={styles.teacherContainer}
         >
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {icon}
            </button>
            <Swiper
               ref={sliderRef}
               className={styles.teacherSwiper}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               modules={[Mousewheel, Navigation, FreeMode]}
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
                  <SwiperSlide
                     key={i}
                     onClick={() => openModal(card)}
                     className={styles.cardSwiperTeacher}
                  >
                     <TeacherCard {...card} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button
               className={styles.buttonNext}
               onClick={handleNext}
            >
               {icon}
            </button>
         </div>
         <SharedButton
            whatsapp={contacts.studioNumber}
            classname="studioTeachersButton"
            text="Связаться с нами"
         />
         {selectedTeacher && (
            <Modal
               teacher={selectedTeacher}
               closeModal={closeModal}
            />
         )}
      </SectionWrapper>
   );
};

export default Teachers;
