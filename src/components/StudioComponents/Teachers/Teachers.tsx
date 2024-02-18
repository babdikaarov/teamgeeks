// modules
import { useState, useCallback, useEffect } from "react";
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
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_teacher.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
// FIX_ME replace staticData when backend ready
import contacts from "../../../tempData/contacts.json";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { getTeachers } from "../../../store/teachersThunk.ts";

type Teacher = {
   name: string;
   position: string;
   urlInstagram: string;
   description: string;
   image: string;
}

const Teachers = () => {
   const dispatch = useAppDispatch();
   const data = useAppSelector(state => state.getTeachers.data)!;
   const [selectedTeacher, setSelectedTeacher] = useState<Prop.Teachers.TeacherType | null>(null);
   const { refToogle } = useToggleActiveNavigation(EBlockID.TEACHERS);
   const [teachers, setTeachers] = useState<Teacher[]>([]);

   const openModal = useCallback((teacher: Prop.Teachers.TeacherType) => {
      setSelectedTeacher(teacher);
   }, []);

   const closeModal = useCallback(() => {
      setSelectedTeacher(null);
   }, []);

   useEffect(() => {
      dispatch(getTeachers());
      setTeachers(data);
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
               {teachers.map((card, i) => (
                  <SwiperSlide
                     key={i}
                     onClick={() => openModal(card)}
                     className={styles.cardSwiperTeacher}
                  >
                     <TeacherCard img={card.image}
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
