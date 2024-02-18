// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getOurTeam } from "../../../store/ourTeamThunk";
import { useInView } from "react-intersection-observer";
import { setDrawerTeamSlice } from "../../../store/drawerSlice";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import TeamCard from "./TeamCard";
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// styles
import styles from "./_ourTeam.module.scss";
// import teamList from "../../../tempData/getTeamList"; // FIX_ME remove static data add backend when ready

const OurTeam = () => {
   const dispatch = useAppDispatch();
   const hasSetDrawerAttribute = useAppSelector((state) => state.drawerTeam.dataDrawer);
   const { ref, inView } = useInView();

   useEffect(() => {
      if (inView && !hasSetDrawerAttribute) {
         dispatch(setDrawerTeamSlice());
      }
   }, [inView, hasSetDrawerAttribute, dispatch]);

   const data = useAppSelector((state) => state.getOurTeam.data)!;
   useEffect(() => {
      dispatch(getOurTeam());
   }, [dispatch]);

   return (
      <SectionWrapper
         header={"Наша команда"}
         className={styles.teamWrapper}
         id="ourteam"
         forwardedRef={ref}
      >
         <div className={styles.teamContainer}>
            <NavigationButton id="TeamPrev"/>
            <Swiper
               className={styles.swiperWrapper}
               data-draw-out={hasSetDrawerAttribute}
               spaceBetween={30}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               navigation={{ nextEl: "#TeamNext", prevEl: "#TeamPrev" }}
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
               {data.map((card, i) => (
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
            <NavigationButton id="TeamNext"/>
         </div>
      </SectionWrapper>
   );
};

export default OurTeam;
