import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_collaboration.module.scss";
import CollabCard from "../../../UI/Cards/CollabCard";
import cards from "../../../tempData/getCollabData";
import icon from "../../../assets/icons/bigArrow";
import useSwiperNavigation from "../../../modules/hooks/useSwiperNavigation";

const Collaboration = () => {
   const { sliderRef, handlePrev, handleNext } = useSwiperNavigation();

   return (
      <SectionWrapper
         header={"Коллаборации"}
         className={styles.collabWrapper}
         id="collaboration"
      >
         <div className={styles.collabContainer}>
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
                     spaceBetween: 16,
                  },
                  1: {
                     spaceBetween: 10,
                  },
               }}
            >
               <div>
                  {cards?.map((card, i) => (
                     /* FIX_ME construct logic for partrait and landscape verify with team */
                     <SwiperSlide
                        key={i}
                        className={styles.collabCardsContainer}
                     >
                        <CollabCard
                           src={card.src}
                           alt={card.alt}
                           firstName={card.firstName}
                           lastName={card.lastName}
                        />
                     </SwiperSlide>
                  ))}
               </div>
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
