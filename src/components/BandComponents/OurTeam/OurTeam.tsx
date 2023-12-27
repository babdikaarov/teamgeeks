import styles from "../../../scss/partials/coolBand/_ourTeam.module.scss";
import "../../../scss/index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Back from "../../../assets/ourTeamImages/Back.mp4";
import AnaraCard from "../../../assets/ourTeamImages/AnaraCard.png";
import ErbolCard from "../../../assets/ourTeamImages/ErbolCard.png";
import SultanCard from "../../../assets/ourTeamImages/SultanCard.png";
import DavletCard from "../../../assets/ourTeamImages/DavletCard.png";
import OsmaniCard from "../../../assets/ourTeamImages/OsmaniCard.png";
import DjKhanCard from "../../../assets/ourTeamImages/DjKhanCard.png";
import DjOlympCard from "../../../assets/ourTeamImages/DjOlympCard.png";
import KenoCard from "../../../assets/ourTeamImages/KenoCard.png";
import DanceShowCard from "../../../assets/ourTeamImages/DanceShowCard.png";

type CardProps = {
   card: string;
};

const OurTeamCard = (card: CardProps) => {
   return (
      <div className={styles.OurTeamCard}>
         <div className={styles.front}>
            <img src={card.card} alt="" />
         </div>
         <div className={styles.back}>
            <video autoPlay loop muted>
               <source src={Back} type="video/mp4" />
            </video>
         </div>
      </div>
   );
};

const OurTeam = () => {
   return (
      <div className={styles.OurTeam}>
         <h1>Наша команда</h1>
         <div className={styles.OurTeamSlider}>
            <Swiper spaceBetween={-550} slidesPerView={3}>
               <SwiperSlide>
                  <OurTeamCard card={AnaraCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={ErbolCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={SultanCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={DavletCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={OsmaniCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={DjKhanCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={DjOlympCard} />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamCard card={KenoCard} />
               </SwiperSlide>
               <SwiperSlide className={styles.DanceShow}>
                  <OurTeamCard card={DanceShowCard} />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default OurTeam;
