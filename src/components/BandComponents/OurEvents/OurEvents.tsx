import { useAppSelector } from "../../../app/hooks";
// modules
// styles
import styles from "./_ourevents.module.scss";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "./ButtonWithArrow";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";

const OurEvents = () => {
   const data = useAppSelector((state) => {
      if (state.getBandAlbum.data.length < 4) {
         return [...state.getBandAlbum.data, ...state.getBandAlbum.data];
      } else {
         return state.getBandAlbum.data;
      }
   })!;

   return (
      <SectionWrapper
         header={"Наши мероприятия"}
         className={styles.ourEvent}
      >
         <div
            className={styles.scroller}
            data-direction="left"
         >
            <div
               className={styles.scrollerInner}
               data-scroller_inner="inner"
            >
               {data.map((card) => (
                  <ImageLoader
                     bluer={card.bluer}
                     src={card.coverImage}
                     key={card.id}
                  />
               ))}
            </div>
            <div
               className={styles.scrollerInner}
               data-scroller_inner="copy"
            >
               {data.map((card) => (
                  <ImageLoader
                     key={card.id}
                     bluer={card.bluer}
                     src={card.coverImage}
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
