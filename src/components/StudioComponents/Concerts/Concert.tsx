// modules
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// ^^^ SWIPER.JS
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ConcertCard from "./ConcertCard";
import icon from "../../../assets/icons/bigArrow";
// styles
import styles from "./_concerts.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import tempData from "../../../tempData/getConcertData"; //FIX_ME replace with backend

const Concert = () => {
   const { refToogle } = useToggleActiveNavigation(EBlockID.CONCERT);

   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const concertImages = tempData;
   const mobileArray = concertImages.slice(0, 3);

   return (
      <SectionWrapper header="Отчетные концерты">
         <div
            className={styles.ConcertSlider}
            ref={refToogle}
         >
            {mobileWidth ? (
               mobileArray.map((card, i) => (
                  <ConcertCard
                     key={i}
                     {...card}
                  />
               ))
            ) : (
               <>
                  <Swiper
                     spaceBetween={10}
                     slidesPerView={3}
                     freeMode
                     loop
                     mousewheel={{
                        forceToAxis: true,
                     }}
                     modules={[Mousewheel, Navigation, FreeMode]}
                     navigation={{ nextEl: "#btn61", prevEl: "#btn62" }}
                     className={styles.concertSwiper}
                  >
                     {concertImages.map((image, index) => (
                        <SwiperSlide
                           key={index}
                           className={styles.concertsSwipeCard}
                        >
                           <ConcertCard {...image} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <button
                     id="btn62"
                     className={styles.LeftSwip}
                  >
                     {icon}
                  </button>
                  <button
                     id="btn61"
                     className={styles.RightSwip}
                  >
                     {icon}
                  </button>
               </>
            )}

            <a
               className={styles.watchmore}
               href="/gallery"
            >
               Смотреть еще
            </a>
         </div>
      </SectionWrapper>
   );
};

export default Concert;
