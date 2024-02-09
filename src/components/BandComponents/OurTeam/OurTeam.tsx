import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_ourTeam.module.scss";
import TeamCard from "../../../UI/Cards/TeamCard";
import icon from "../../../assets/icons/bigArrow";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect } from "react";
import { getOurTeam } from "../../../store/ourTeamThunk";

const OurTeam = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   const dispatch = useAppDispatch();
   const data = useAppSelector((state) => state.getOurTeam.data)!;
   useEffect(() => {
      dispatch(getOurTeam());
   }, [dispatch]);
   return (
      <SectionWrapper
         header={"Наша команда"}
         className={styles.teamWrapper}
         id="ourteam"
      >
         <div className={styles.teamContainer}>
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {icon}
            </button>
            <Swiper
               ref={sliderRef}
               spaceBetween={30}
               slidesPerView={"auto"}
               mousewheel={{
                  forceToAxis: true,
               }}
               modules={[Mousewheel, Navigation]}
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
                     className={styles.cardContainer + " " + styles[card.orientation.toLowerCase()]}
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
