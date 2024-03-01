import { useAppSelector } from "../../../app/hooks";
// modules
// styles
import styles from "./_ourevents.module.scss";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "./ButtonWithArrow";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";

const OurEvents = () => {
   const dataStore: Slice.IGetBandAlbum[] = useAppSelector((state) => {
      state.getBandAlbum.data;
   })!;
   if (!dataStore) return;
   const data = dataStore.length < 4 ? [...dataStore, ...dataStore] : dataStore;

   return (
      <SectionWrapper header={"Наши мероприятия"} className={styles.ourEvent}>
         <div className={styles.scroller} data-direction="left">
            <div className={styles.scrollerInner} data-scroller_inner="inner">
               {data.map((card) => (
                  <ImageLoader bluer={card.bluer} src={card.coverImage} key={self.crypto.randomUUID()} />
               ))}
            </div>
            <div className={styles.scrollerInner} data-scroller_inner="copy">
               {data.map((card) => (
                  <ImageLoader key={self.crypto.randomUUID()} bluer={card.bluer} src={card.coverImage} />
               ))}
            </div>
         </div>
         <ButtonWithArrow text="Подробнее" to={"/gallery"} />
      </SectionWrapper>
   );
};

export default OurEvents;
