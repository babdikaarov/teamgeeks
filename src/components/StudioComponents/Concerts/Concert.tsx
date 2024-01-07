import { Swiper, SwiperSlide } from "swiper/react";
import ConcertImg1 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg2 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg3 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg4 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg5 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg6 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg7 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg8 from "../../../assets/coolstudio/Concert.jpeg";
import ConcertImg9 from "../../../assets/coolstudio/Concert.jpeg";
import styles from "./_concerts.module.scss";
import icon from "../Concerts/iconSwipe"
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
type CardProps = {
   card: string;
};

const ConcertCard = (props: CardProps) => {
   return (
      <div className={styles.ConcertsCard}>
         <div className={styles.front}>
            <img className={styles.concertImg} src={props.card} alt="" />
            <p className={styles.Summer}>Summer Fest</p>
            <p className={styles.Bishkek}>Бишкек</p>
            <p className={styles.december}>Декабрь</p>
         </div>
      </div>
   );
};

const Concert = () => {
   const concertImages = [
      ConcertImg1,
      ConcertImg2,
      ConcertImg3,
      ConcertImg4,
      ConcertImg5,
      ConcertImg6,
      ConcertImg7,
      ConcertImg8,
      ConcertImg9,
   ];

   return (
      <SectionWrapper header="Отчетные концерты">
      <div>
         <div className={styles.ConcertSlider}>
            <Swiper
               spaceBetween={0}
               slidesPerView={3}
               navigation={{ nextEl: "#btn1", prevEl: "#btn2" }}
               modules={[Navigation]}
            >
               {concertImages.map((image, index) => (
                  <SwiperSlide key={index}>
                       <Link to={'/gallery/10'}><ConcertCard card={image} /></Link>   
                  </SwiperSlide>
               ))}
            </Swiper>
            <div id="btn2" className={styles.LeftSwip}>
               {icon}
            </div>
            <div id="btn1" className={styles.RightSwip}>
              {icon}
            </div>
            <a className={styles.watchmore} href="/gallery">Смотреть еще</a>

         </div>
      </div>
      </SectionWrapper>
   );
};

export default Concert;