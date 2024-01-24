import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./_ourstudents.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import OurStudentsCard from "../../../UI/Cards/OurStudentsCard";
import data from "./tempdata";
import icon from "../../../assets/icons/bigArrow";
import { extractAllYouTubeVideoID } from "../../../modules/extractAllYouTubeVideoID";

const OurStudents = () => {
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = data.slice(0, 3);
   const allIDS = extractAllYouTubeVideoID(data);

   return (
      <SectionWrapper header="Успехи наших студентов" id="students">
         <div className={styles.ourStudents}>
            {mobileWidth ? (
               mobileArray.map((url, index) => (
                  <OurStudentsCard key={index} url={url} addToID={index} allIDS={allIDS} />
               ))
            ) : (
               <>
                  <Swiper
                     spaceBetween={10}
                     slidesPerView={"auto"}
                     navigation={{ nextEl: "#btn11", prevEl: "#btn22" }}
                     modules={[Navigation]}
                     loop={true}
                     className={styles.ourStudentsSwiper}
                  >
                     {[...data, ...data].map((url, index) => (
                        <SwiperSlide key={index} className={styles.ourStudentsSwipeCard}>
                           <OurStudentsCard url={url} addToID={index} allIDS={allIDS} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <button id="btn22" className={styles.LeftSwip}>
                     {icon}
                  </button>
                  <button id="btn11" className={styles.RightSwip}>
                     {icon}
                  </button>
               </>
            )}
            <a className={styles.watchmore} href="https://www.youtube.com/@coolstudiokg" target="_blank">
               Больше видео
            </a>
         </div>
      </SectionWrapper>
   );
};

export default OurStudents;
