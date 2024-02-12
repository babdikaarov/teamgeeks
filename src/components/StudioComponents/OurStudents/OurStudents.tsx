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
import icon from "../../../assets/icons/bigArrow";
// styles
import styles from "./_ourstudents.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import data from "../../../tempData/getOurStudents"; //FIX_ME replace with backend

const OurStudents = () => {
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = data.slice(0, 3);
   const allIDS = extractAllYouTubeVideoID(data);
   const { refToogle } = useToggleActiveNavigation(EBlockID.STUDENTS);

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
                     url={url}
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
                     navigation={{ nextEl: "#btn11", prevEl: "#btn22" }}
                     className={styles.ourStudentsSwiper}
                  >
                     {[...data, ...data].map((url, index) => (
                        <SwiperSlide
                           key={index}
                           className={styles.ourStudentsSwipeCard}
                        >
                           <OurStudentsCard
                              url={url}
                              key={index}
                              addToID={index}
                              allIDS={allIDS}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <button
                     id="btn22"
                     className={styles.LeftSwip}
                  >
                     {icon}
                  </button>
                  <button
                     id="btn11"
                     className={styles.RightSwip}
                  >
                     {icon}
                  </button>
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
