// modules
import { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setDrawerCollabSlice } from "../../../store/drawerSlice";

const Collaboration = () => {
   const { refToogle } = useToggleActiveNavigation(EBlockID.COLLAB);
   const { ref, inView } = useInView();
   const dispatch = useAppDispatch();
   const hasSetDrawerAttribute = useAppSelector((state) => state.drawerCollab.dataDrawer);

   useEffect(() => {
      if (inView && !hasSetDrawerAttribute) {
         dispatch(setDrawerCollabSlice());
      }
   }, [inView, hasSetDrawerAttribute, dispatch]);

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
               id="btn22"
            >
               {Icon}
            </button>
            <Swiper
               data-draw-out={hasSetDrawerAttribute}
               className={styles.swiperWrapper}
               spaceBetween={0}
               slidesPerView={"auto"}
               freeMode
               loop
               mousewheel={{
                  forceToAxis: true,
               }}
               navigation={{ nextEl: "#btn21", prevEl: "#btn22" }}
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
               id="btn21"
            >
               {Icon}
            </button>
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;
