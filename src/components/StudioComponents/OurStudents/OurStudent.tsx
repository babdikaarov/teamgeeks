import { Swiper, SwiperSlide } from "swiper/react";
import StudensImg1 from "../../../assets/coolstudio/Image.png";
import StudensImg2 from "../../../assets/coolstudio/Image.png";
import StudensImg3 from "../../../assets/coolstudio/Image.png";
import StudensImg4 from "../../../assets/coolstudio/Image.png";
import StudensImg5 from "../../../assets/coolstudio/Image.png";
import VideoImg from "../../../assets/coolstudio/Frame 427319234.png";
import styles from "../../../scss/partials/coolStudio/_ourstudents.module.scss";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
type CardProps = {
   card: string;
};

const StudentsCard = (props: CardProps) => {
   return (
      <div className={styles.StudentsCard}>
         <div className={styles.front}>
            <img className={styles.images} src={props.card} alt="" />
            <img className={styles.imag} src={VideoImg} alt="" />
         </div>
      </div>
   );
};

const OurStudents = () => {
   const concertImages = [StudensImg1, StudensImg2, StudensImg3, StudensImg4, StudensImg5];

   return (
      <div>
         <h1>Успехи наших студентов</h1>
         <div className={styles.ConcertSlider}>
            <Swiper
               spaceBetween={0}
               slidesPerView={3}
               navigation={{ nextEl: "#btn11", prevEl: "#btn22" }}
               modules={[Navigation]}
            >
               {concertImages.map((image, index) => (
                  <SwiperSlide key={index}>
                     <StudentsCard card={image} />
                     <h2>
                        Radisson Collection
                        <br /> Paradise
                     </h2>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div id="btn22" className={styles.LeftSwip}>
               &lt;
            </div>
            <div id="btn11" className={styles.RightSwip}>
               &gt;
            </div>
            <a className={styles.watchmore} href="#">
               Смотреть еще
            </a>
         </div>
      </div>
   );
};

export default OurStudents;
