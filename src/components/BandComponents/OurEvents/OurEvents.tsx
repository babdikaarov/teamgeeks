import { useAppSelector } from "../../../app/hooks";
// modules
// styles
import styles from "./_ourevents.module.scss";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "./ButtonWithArrow";

const OurEvents = () => {
   const data = useAppSelector((state) => state.getBandAlbum.data)!;

   return (
      <SectionWrapper
         header={"Наши мероприятия"}
         className={styles.ourEvent}
      >
         <div
            className={styles.scroller}
            data-scroller="outter"
            data-direction="left"
         >
            <div
               className={styles.scrollerInner}
               data-scroller_inner="inner"
            >
               {(data.length < 6 ? [...data, ...data] : data).map((card, i) => (
                  <img
                     key={i}
                     src={card.coverImage}
                     alt={card.name}
                  />
               ))}
            </div>
         </div>
         <ButtonWithArrow
            text="Подробнее"
            to={"/gallery"}
         />
      </SectionWrapper>
   );
};

export default OurEvents;
