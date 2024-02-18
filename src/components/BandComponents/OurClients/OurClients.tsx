// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ClientCard from "./ClientCard";
// styles
import styles from "./_ourClient.module.scss";
// static
import staticText from "./staticData.json";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { useEffect, useState } from "react";
import { getClients } from "../../../store/ourclientsThunk.ts"; //FIX-ME resplce with backend

const OurClients = () => {

   const dispatch = useAppDispatch();
   const data2 = useAppSelector(state => state.getOurClients.data)!;
   const [array, setArray] = useState<Slice.IClients[]>([]);

   useEffect(() => {
      dispatch(getClients());
      setArray(data2);
   }, []);

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
            {array.map((every) => (
               <ClientCard
                  key={every.id}
                  image={every.image}
                  url={every.url}
                  bluer={every.bluer}
                  id={every.id}/>
            ))}
         </div>
      </SectionWrapper>
   );
};

export default OurClients;
