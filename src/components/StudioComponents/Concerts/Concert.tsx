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
import { mainElementAnimation } from "../../../modules/helperFc/transition";
import { useLessConcertSuccess } from "../../../modules/hooks/useLess";

const Concert = () => {
   const album = useAppSelector((state) => state.getStudioAlbum)!;
   const { refToogle } = useToggleActiveNavigation(EBlockID.CONCERT);
   const mobileWidth = useMediaQuery("(max-width: 576px)");
   const mobileArray = album.data.slice(0, 3);

   const lessThree = useLessConcertSuccess(album.data.length);
   if (!album.getLoading) return null;

   return (
      <SectionWrapper header="Отчетные концерты">
         <div className={styles.ConcertSlider} ref={refToogle}>
            {mobileWidth ? (
               mobileArray.map((card, i) => <ConcertCard key={i} {...card} />)
            ) : (
               <>
                  <Swiper
                     spaceBetween={10}
                     slidesPerView={"auto"}
                     freeMode={!lessThree.less}
                     loop={!lessThree.less}
                     mousewheel={{
                        forceToAxis: true,
                     }}
                     modules={!lessThree.less ? [Mousewheel, Navigation, FreeMode] : []}
                     navigation={{ nextEl: "#ConcertNext", prevEl: "#ConcertPrev" }}
                     className={styles.concertSwiper}
                     data-less-three={lessThree.less}
                  >
                     {(!lessThree.less ? [...album.data, ...album.data] : album.data).map((image, index) => (
                        <SwiperSlide key={index} className={styles.concertsSwipeCard}>
                           <ConcertCard {...image} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {!lessThree.hide ? (
                     <>
                        <NavigationButton id="ConcertPrev" />
                        <NavigationButton id="ConcertNext" />
                     </>
                  ) : null}
               </>
            )}

            {!(lessThree.size === 1) ? (
               <Link className={styles.watchmore} to="/studio/gallery" onClick={mainElementAnimation}>
                  Смотреть еще
               </Link>
            ) : null}
         </div>
      </SectionWrapper>
   );
};

export default Concert;
