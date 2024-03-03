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
import { useAppSelector } from "../../../app/hooks";
import { useLessConcertSuccess } from "../../../modules/hooks/useLess";

const OurStudents = () => {
   const students = useAppSelector((state) => state.getStudentSuccess)!;
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = students.data.slice(0, 3);
   const allIDS = extractAllYouTubeVideoID(students.data.map((el) => el.url));
   const { refToogle } = useToggleActiveNavigation(EBlockID.STUDENTS);
   const lessThree = useLessConcertSuccess(students.data.length);

   if (!students.getLoading) return null;
   return (
      <SectionWrapper header="Успехи наших студентов" id="students">
         <div ref={refToogle} className={styles.ourStudents}>
            {mobileWidth ? (
               mobileArray.map((url, index) => (
                  <OurStudentsCard key={index} url={url.url} addToID={index} allIDS={allIDS} />
               ))
            ) : (
               <>
                  <Swiper
                     spaceBetween={10}
                     slidesPerView={"auto"}
                     freeMode={!lessThree.less}
                     loop={!lessThree.less}
                     mousewheel={{
                        forceToAxis: true,
                     }}
                     modules={!lessThree.less ? [Mousewheel, Navigation, FreeMode] : []}
                     navigation={{ nextEl: "#btn51", prevEl: "#StudentsPrev" }}
                     className={styles.ourStudentsSwiper}
                     data-less-three={lessThree.less}
                  >
                     {(!lessThree.less ? [...students.data, ...students.data] : students.data).map((url, index) => (
                        <SwiperSlide key={index} className={styles.ourStudentsSwipeCard}>
                           <OurStudentsCard url={url.url} addToID={url.id} allIDS={allIDS} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {!lessThree.hide ? (
                     <>
                        <NavigationButton id="StudentsPrev" />
                        <NavigationButton id="StudentsNext" />
                     </>
                  ) : null}
               </>
            )}
            {!(lessThree.size === 1) ? (
               <a className={styles.watchmore} href="https://www.youtube.com/@coolstudiokg" target="_blank">
                  Больше видео
               </a>
            ) : null}
         </div>
      </SectionWrapper>
   );
};

export default OurStudents;
