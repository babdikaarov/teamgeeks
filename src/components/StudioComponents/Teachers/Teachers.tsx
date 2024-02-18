// modules
import { useState, useCallback, useEffect } from "react";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { getTeachers } from "../../../store/teachersThunk.ts";
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
// FIX_ME replace staticData when backend ready

const Teachers = () => {
   const [selectedTeacher, setSelectedTeacher] = useState<Slice.ITeacherData | null>(null);
   const { refToogle } = useToggleActiveNavigation(EBlockID.TEACHERS);
   const dispatch = useAppDispatch();
   const data = useAppSelector((state) => state.getTeachers.data)!;
   const { studioNumber } = useAppSelector((state) => state.getContacts.data)!;

   const openModal = useCallback((teacher: Slice.ITeacherData) => {
      setSelectedTeacher(teacher);
   }, []);

   const closeModal = useCallback(() => {
      setSelectedTeacher(null);
   }, []);

   useEffect(() => {
      dispatch(getTeachers());
   }, [dispatch]);

   return (
      <SectionWrapper
         header="Команда Cool  Studio"
         id="teachers"
      >
         <div
            ref={refToogle}
            className={styles.teacherContainer}
         >
            <NavigationButton id="TeachersPrev" />
            <Swiper
               className={styles.teacherSwiper}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               navigation={{ nextEl: "#TeachersNext", prevEl: "#TeachersPrev" }}
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
               {data.map((card, i) => (
                  <SwiperSlide
                     key={i}
                     onClick={() => openModal(card)}
                     className={styles.cardSwiperTeacher}
                  >
                     <TeacherCard
                        img={card.image}
                        name={card.name}
                        description={card.description}
                        instagram={card.urlInstagram}
                        expertise={card.position}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <NavigationButton id="TeachersNext" />
         </div>
         <SharedButton
            whatsapp={studioNumber}
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
