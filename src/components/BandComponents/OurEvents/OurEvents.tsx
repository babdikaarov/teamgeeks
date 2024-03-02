import { useAppSelector } from "../../../app/hooks";
// modules
// styles
import styles from "./_ourevents.module.scss";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "./ButtonWithArrow";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import { useEffect, useState } from "react";

const OurEvents = () => {
   const [data, setData] = useState<Slice.IGetBandAlbum[]>([]);
   const dataStore: Slice.IGetBandAlbum[] = useAppSelector((state) => state.getBandAlbum.data)!;

   useEffect(() => {
      if (!dataStore) return;
      setData(dataStore.length < 4 ? [...dataStore, ...dataStore] : dataStore);
   }, [dataStore]);

   return (
      <SectionWrapper header={"Наши мероприятия"} className={styles.ourEvent}>
         <div className={styles.scroller} data-direction="left">
            <div
               className={styles.scrollerInner}
               data-scroller_inner="inner"
               data-animation={true} /* false for no pause interaction */
            >
               {data.map((card) => (
                  <ImageLoader bluer={card.bluer} src={card.coverImage} key={self.crypto.randomUUID()} />
               ))}
            </div>
            <div
               className={styles.scrollerInner}
               data-scroller_inner="copy"
               data-animation={true} /* false for no pause interaction */
            >
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
