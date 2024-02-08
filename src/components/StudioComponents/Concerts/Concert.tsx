import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./_concerts.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import tempData from "./tempData";
import ConcertCard from "../../../UI/Cards/ConcertCard";
import icon from "../../../assets/icons/bigArrow";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../types";

const Concert = () => {
   const { ref } = useToggleActiveNavigation(EBlockID.Concert);

   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const concertImages = tempData;
   const mobileArray = concertImages.slice(0, 3);

   return (
      <SectionWrapper header="Отчетные концерты">
         <div
            className={styles.ConcertSlider}
            ref={ref}
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
                     freeMode={true}
                     loop
                     modules={[FreeMode, Navigation]}
                     navigation={{ nextEl: "#btn1", prevEl: "#btn2" }}
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
                     id="btn2"
                     className={styles.LeftSwip}
                  >
                     {icon}
                  </button>
                  <button
                     id="btn1"
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
