// modules
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { useEffect } from "react";
import { getClients } from "../../../store/ourclientsThunk.ts";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
// styles
import styles from "./_ourClient.module.scss";
// static
import staticText from "./staticData.json";

const OurClients = () => {
   const dispatch = useAppDispatch();
   const data = useAppSelector((state) => state.getOurClients.data)!;

   useEffect(() => {
      dispatch(getClients());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   return (
      <SectionWrapper
         header={staticText.header}
         id={staticText.scrollID}
         className={styles.ourClients}
      >
         <article className={styles.clientsArticle}>
            <h2>{staticText.h2}</h2>
            <h4>{staticText.h4}</h4>
         </article>
         <div className={styles.clientsCards}>
            {data.map((every) => (
               <img
                  key={every.id}
                  className={styles.clientCard}
                  src={every.image}
                  alt={every.url}
                  title={every.url}
               />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default OurClients;
