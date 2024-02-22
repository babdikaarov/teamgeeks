// modules
import { useAppSelector } from "../../../app/hooks.ts";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
// styles
import styles from "./_ourClient.module.scss";
// static
import staticText from "./staticData.json";

const OurClients = () => {
   const data = useAppSelector((state) => state.getOurClients.data)!;

   return (
      <SectionWrapper
         header={staticText.header}
         id={staticText.scrollID}
         className={styles.ourClients}
      >
         <article className={styles.clientsArticle}>
            <h2>{staticText.h2}</h2>
            <div className={styles.h4}>{staticText.h4}</div>
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
