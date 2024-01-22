import styles from "./_collaboration.module.scss";
import cardsData from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import icon from "../../../assets/icons/teamArrow.png";
// FIX_ME scroll
// import { Mousewheel } from "swiper/modules";
import useSwiperNavigation from "../../../app/hooks/useSwiperNavigation";

const Collaboration = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper header={"Коллаборации"} className={styles.collabWrapper} id="collaboration">
         <div className={styles.collabSwiperContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               <img src={icon} alt="" />
            </button>
            <Swiper
               ref={sliderRef}
               loop={true}
               slidesPerView={"auto"}
               spaceBetween={30}
               // FIX_ME scroll is not smooth
               // mousewheel={true}
               // modules={[Mousewheel]}
               breakpoints={{
                  440: {
                     spaceBetween: 20,
                  },
                  1: {
                     spaceBetween: 16,
                  },
               }}
            >
               <div>
                  {cardsData?.map((card, i) => (
                     /* FIX_ME construct logic for partrait and landscape verify with team */
                     <SwiperSlide key={i} className={styles.collabCardsContainer}>
                        <CollabCard
                           src={card.src}
                           alt={card.alt}
                           firstName={card.firstName}
                           lastName={card.lastName}
                        ></CollabCard>
                     </SwiperSlide>
                  ))}
               </div>
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               <img src={icon} alt="" />
            </button>
         </div>
      </SectionWrapper>
   );
};

export default Collaboration;