import { Swiper, SwiperSlide } from "swiper/react";
import StudensImg1 from "../../../assets/coolstudio/Image.png";
import StudensImg2 from "../../../assets/coolstudio/Image.png";
import StudensImg3 from "../../../assets/coolstudio/Image.png";
import StudensImg4 from "../../../assets/coolstudio/Image.png";
import StudensImg5 from "../../../assets/coolstudio/Image.png";
import icon from "../../../assets/icons/bigArrow";
import styles from "./_ourstudents.module.scss";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useMediaQuery } from "../../../app/hooks/useMediaQuery";
import OurStudentsCard from "../../../UI/Cards/OurStudentsCard";

const OurStudents = () => {
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const concertImages = [StudensImg1, StudensImg2, StudensImg3, StudensImg4, StudensImg5];

   const mobileArray = concertImages.slice(0, 3);

   return (
      <SectionWrapper header="Успехи наших студентов" id="students">
         <div className={styles.ourStudents}>
            {mobileWidth ? (
               mobileArray.map((card, i) => <OurStudentsCard key={i} card={card} />)
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
                     {[...concertImages, ...concertImages].map((image, index) => (
                        <SwiperSlide key={index} className={styles.ourStudentsSwipeCard}>
                           <OurStudentsCard card={image} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div id="btn22" className={styles.LeftSwip}>
                     {icon}
                  </div>
                  <div id="btn11" className={styles.RightSwip}>
                     {icon}
                  </div>
               </>
            )}
            <a className={styles.watchmore} href="https://www.youtube.com/@coolband4563" target="_blank">
               Больше видео
            </a>
         </div>
      </SectionWrapper>
   );
};

export default OurStudents;
