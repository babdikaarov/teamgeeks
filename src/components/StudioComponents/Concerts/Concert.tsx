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
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_concerts.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import { useAppSelector } from "../../../app/hooks";
import { Link } from "react-router-dom";


const Concert = () => {
   const album = useAppSelector((state) => state.getStudioAlbum)!;
   const { refToogle } = useToggleActiveNavigation(EBlockID.CONCERT);
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = album.data.slice(0, 3);

   if(!album.getLoading) return null
   return (
      <SectionWrapper header="Отчетные концерты">
         <div className={styles.ConcertSlider} ref={refToogle}>
            {mobileWidth ? (
               mobileArray.map((card, i) => <ConcertCard key={i} {...card} />)
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
                     navigation={{ nextEl: "#ConcertNext", prevEl: "#ConcertPrev" }}
                     className={styles.concertSwiper}
                  >
                     {(album.data.length < 5 ? [...album.data, ...album.data] : album.data).map((image, index) => (
                        <SwiperSlide key={index} className={styles.concertsSwipeCard}>
                           <ConcertCard {...image} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <NavigationButton id="ConcertPrev" />
                  <NavigationButton id="ConcertNext" />
               </>
            )}

            <Link className={styles.watchmore} to="/studio/gallery" onClick={() => window.scrollTo(0, 0)}>
               Смотреть еще
            </Link>
         </div>
      </SectionWrapper>
   );
};

export default Concert;
