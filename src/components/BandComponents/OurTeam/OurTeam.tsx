// modules
// import { useEffect } from "react";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { getOurTeam } from "../../../store/ourTeamThunk";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import TeamCard from "./TeamCard";
import icon from "../../../assets/icons/bigArrow";
// styles
import styles from "./_ourTeam.module.scss";
import addAvailableVideo from "../../../tempData/getTeamList"; // FIX_ME remove static data add backend when ready
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { setDrawerTeamSlice } from "../../../store/drawerSlice";

const OurTeam = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();
   const dispatch = useAppDispatch();
   const hasSetDrawerAttribute = useAppSelector((state) => state.drawerTeam.dataDrawer);
   const { ref, inView } = useInView();

   useEffect(() => {
      if (inView && !hasSetDrawerAttribute) {
         dispatch(setDrawerTeamSlice());
      }
   }, [inView, hasSetDrawerAttribute, dispatch]);

   // const data = useAppSelector((state) => state.getOurTeam.data)!;
   // useEffect(() => {
   //    dispatch(getOurTeam());
   // }, [dispatch]);

   return (
      <SectionWrapper
         header={"Наша команда"}
         className={styles.teamWrapper}
         id="ourteam"
         forwardedRef={ref}
      >
         <div className={styles.teamContainer}>
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {icon}
            </button>
            <Swiper
               className={styles.swiperWrapper}
               data-draw-out={hasSetDrawerAttribute}
               ref={sliderRef}
               spaceBetween={30}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               modules={[Mousewheel, Navigation, FreeMode]}
               breakpoints={{
                  1200: {
                     spaceBetween: 30,
                  },
                  576: {
                     spaceBetween: 20,
                  },
                  1: {
                     spaceBetween: 16,
                  },
               }}
            >
               {addAvailableVideo.map((card, i) => (
                  <SwiperSlide
                     key={i}
                     className={styles.cardContainer + " " + styles[card.orientation]}
                  >
                     <TeamCard
                        animate={i === 0}
                        {...card}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            <button
               className={styles.buttonNext}
               onClick={handleNext}
            >
               {icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default OurTeam;
