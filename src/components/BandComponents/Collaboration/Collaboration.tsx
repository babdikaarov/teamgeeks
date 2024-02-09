import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_collaboration.module.scss";
import cards from "../../../tempData/getCollabData";
import icon from "../../../assets/icons/bigArrow";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";
import { EBlockID } from "../../../types";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Collaboration = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();
   const { refToogle } = useToggleActiveNavigation(EBlockID.Collab);
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
         id={EBlockID.Collab}
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
               {icon}
            </button>
            <Swiper
               className={styles.experiment}
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
                     spaceBetween: 16,
                  },
                  1: {
                     spaceBetween: 10,
                  },
               }}
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
               {icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;
