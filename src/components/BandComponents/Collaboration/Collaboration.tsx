// modules
import { useEffect } from "react";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { useInView } from "react-intersection-observer";
import { EBlockID } from "../../../globalTypesEnum";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// styles
import styles from "./_collaboration.module.scss";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import Icon from "../../../assets/icons/bigArrow";
import cards from "../../../tempData/getCollabData"; // FIX_ME {cards} replace with backend

const Collaboration = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();
   const { refToogle } = useToggleActiveNavigation(EBlockID.COLLAB);
   const { ref, inView } = useInView();

   useEffect(() => {
      const drawer = sliderRef.current as unknown as HTMLElement;
      if (inView) {
         drawer.setAttribute("draw-out", "true");
      } else {
         drawer.setAttribute("draw-out", "false");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [inView]);

   return (
      <SectionWrapper
         header={"Коллаборации"}
         className={styles.collabWrapper}
         id={EBlockID.COLLAB}
         forwardedRef={ref}
      >
         <div
            ref={refToogle}
            className={styles.collabContainer}
            data-animate={true}
         >
            <button
               className={styles.buttonPrev}
               onClick={handlePrev}
            >
               {Icon}
            </button>
            <Swiper
               className={styles.swiperWrapper}
               ref={sliderRef}
               spaceBetween={0}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               modules={[Mousewheel, Navigation, FreeMode]}
            >
               {cards?.map((card, i) => (
                  <SwiperSlide
                     key={i}
                     className={styles.card}
                  >
                     <img
                        src={card.src}
                        alt="Card Image"
                     />
                     <p>{`${card.firstName} ${card.lastName}`}</p>
                  </SwiperSlide>
               ))}
            </Swiper>
            <button
               className={styles.buttonNext}
               onClick={handleNext}
            >
               {Icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;
