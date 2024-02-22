// modules
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import { extractAllYouTubeVideoID } from "../../../modules/extractAllYouTubeVideoID";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import OurStudentsCard from "./OurStudentsCard";
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_ourstudents.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
// import data from "../../../tempData/getOurStudents"; //FIX_ME replace with backend
import { useAppSelector } from "../../../app/hooks";

const OurStudents = () => {
   let data = useAppSelector((state) => state.getStudentSuccess.data)!;
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = data.slice(0, 3);
   const allIDS = extractAllYouTubeVideoID(data.map((el) => el.url));
   const { refToogle } = useToggleActiveNavigation(EBlockID.STUDENTS);

   if (data.length <= 4) {
      data = [...data, ...data];
   }

   return (
      <SectionWrapper
         header="Успехи наших студентов"
         id="students"
      >
         <div
            ref={refToogle}
            className={styles.ourStudents}
         >
            {mobileWidth ? (
               mobileArray.map((url, index) => (
                  <OurStudentsCard
                     key={index}
                     url={url.url}
                     addToID={index}
                     allIDS={allIDS}
                  />
               ))
            ) : (
               <>
                  <Swiper
                     slidesPerView={3}
                     spaceBetween={10}
                     freeMode
                     loop
                     mousewheel={{
                        forceToAxis: true,
                     }}
                     modules={[Mousewheel, Navigation, FreeMode]}
                     navigation={{ nextEl: "#btn51", prevEl: "#StudentsPrev" }}
                     className={styles.ourStudentsSwiper}
                  >
                     {data.map((url, index) => (
                        <SwiperSlide
                           key={index}
                           className={styles.ourStudentsSwipeCard}
                        >
                           <OurStudentsCard
                              url={url.url}
                              addToID={url.id}
                              allIDS={allIDS}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <NavigationButton id="StudentsPrev" />
                  <NavigationButton id="StudentsNext" />
               </>
            )}
            <a
               className={styles.watchmore}
               href="https://www.youtube.com/@coolstudiokg"
               target="_blank"
            >
               Больше видео
            </a>
         </div>
      </SectionWrapper>
   );
};

export default OurStudents;
