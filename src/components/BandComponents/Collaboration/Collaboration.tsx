// modules
import { useEffect } from "react";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setDrawerCollabSlice } from "../../../store/drawerSlice";
import NavigationButton from "../../../UI/Buttons/NavigationButton";
// swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
// styles
import styles from "./_collaboration.module.scss";
// Enums
import { EBlockID } from "../../../globalTypesEnum";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";

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

   const collab = useAppSelector((state) => state.getCollaborations)!;
   if (!collab.getLoading) return null;
   return (
      <SectionWrapper header={"Коллаборации"} className={styles.collabWrapper} id={EBlockID.COLLAB} forwardedRef={ref}>
         <div ref={refToogle} className={styles.collabContainer} data-animate={true}>
            <NavigationButton id="CollabPrev" />
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
               navigation={{ nextEl: "#CollabNext", prevEl: "#CollabPrev" }}
               modules={[Mousewheel, Navigation, FreeMode]}
            >
               {collab.data.map((card, i) => (
                  <SwiperSlide key={i} className={styles.card}>
                     <div>
                        <ImageLoader src={card.image} bluer={card.bluer} />
                     </div>
                     <p>{card.name}</p>
                  </SwiperSlide>
               ))}
            </Swiper>
            <NavigationButton id="CollabNext" />
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;
