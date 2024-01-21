import { Swiper, SwiperSlide } from "swiper/react";
import StudensImg1 from "../../../assets/coolstudio/Image.png";
import StudensImg2 from "../../../assets/coolstudio/Image.png";
import StudensImg3 from "../../../assets/coolstudio/Image.png";
import StudensImg4 from "../../../assets/coolstudio/Image.png";
import StudensImg5 from "../../../assets/coolstudio/Image.png";
import VideoImg from "../../../assets/coolstudio/Frame 427319234.png";
import icon from "../OurStudents/iconsSwipe";
import styles from "./_ourstudents.module.scss";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useMediaQuery } from "../../../app/hooks/useMediaQuery";

type CardProps = {
   card: string;
};

const StudentsCard = (props: CardProps) => {
   return (
      <div className={styles.StudentsCard}>
         <div className={styles.front}>
            <img className={styles.images} src={props.card} alt="" />
            <a href="https://www.youtube.com/watch?v=1BS5M20KeZk" target="_blank" className={styles.imag_wrap}>
               <img className={styles.imag} src={VideoImg} alt="" />
            </a>
            <h2 className={styles.studens_text}>Radisson Collection Paradise</h2>
         </div>
      </div>
   );
};

const OurStudents = () => {
   const mobileWidth = useMediaQuery("(max-width: 700px)");
   const concertImages = [StudensImg1, StudensImg2, StudensImg3, StudensImg4, StudensImg5];

   const mobileArray = concertImages.slice(0, 3);

   return (
      <SectionWrapper header="Успехи наших студентов" id="students">
         <div>
            <div className={styles.ConcertSlider}>
               {mobileWidth ? (
                  mobileArray.map((card, i) => <StudentsCard key={i} card={card} />)
               ) : (
                  <>
                     <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{ nextEl: "#btn11", prevEl: "#btn22" }}
                        modules={[Navigation]}
                     >
                        {concertImages.map((image, index) => (
                           <SwiperSlide key={index}>
                              <StudentsCard card={image} />
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
         </div>
      </SectionWrapper>
   );
};

export default OurStudents;
