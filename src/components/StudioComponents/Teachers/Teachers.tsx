// modules
import { useState, useCallback } from "react";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { useAppSelector } from "../../../app/hooks.ts";
// SWIPER.JS
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// Components
import SharedButton from "../../../UI/Buttons/SharedButton";
import Modal from "./Modal";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import TeacherCard from "./TeacherCard";
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_teacher.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";

const Teachers = () => {
   const [selectedTeacher, setSelectedTeacher] = useState<Slice.ITeacherData | null>(null);
   const { refToogle } = useToggleActiveNavigation(EBlockID.TEACHERS);
   const teachers = useAppSelector((state) => state.getTeachers)!;
   const { studioNumber } = useAppSelector((state) => state.getContacts.data)!;

   const openModal = useCallback((teacher: Slice.ITeacherData) => {
      setSelectedTeacher(teacher);
   }, []);

   const closeModal = useCallback(() => {
      setSelectedTeacher(null);
   }, []);
   if (!teachers.getLoading) return null;
   const lessFour = teachers.data.length < 4;
   return (
      <SectionWrapper header="Команда Cool  Studio" id="teachers">
         <div ref={refToogle} className={styles.teacherContainer}>
            {!lessFour ? <NavigationButton id="TeachersPrev" /> : null}
            <Swiper
               key={3}
               className={styles.teacherSwiper}
               data-lessFour={lessFour}
               slidesPerView={"auto"}
               freeMode={!lessFour}
               loop={!lessFour}
               mousewheel={{
                  forceToAxis: true,
               }}
               navigation={{ nextEl: "#TeachersNext", prevEl: "#TeachersPrev" }}
               modules={lessFour ? [] : [Mousewheel, Navigation, FreeMode]}
               
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
               {(!lessFour ? [...teachers.data, ...teachers.data] : teachers.data).map((card, i) => (
                  <SwiperSlide key={i} onClick={() => openModal(card)} 
                  className={styles.cardSwiperTeacher}
                  
                  >
                     <TeacherCard
                        img={card.image}
                        name={card.name}
                        description={card.description}
                        instagram={card.urlInstagram}
                        expertise={card.position}
                        bluer={card.bluer}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            {!lessFour ? <NavigationButton id="TeachersNext" /> : null}
         </div>
         <SharedButton whatsapp={studioNumber} classname="studioTeachersButton" text="Связаться с нами" />
         {selectedTeacher && <Modal teacher={selectedTeacher} closeModal={closeModal} />}
      </SectionWrapper>
   );
};

export default Teachers;
