// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ClientCard from "./ClientCard";
// styles
import styles from "./_ourClient.module.scss";
// static
import staticText from "./staticData.json";
import data from "../../../tempData/getClientsData"; //FIX-ME resplce with backend

const OurClients = () => {
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
            {data.map((card, i: number) => (
               <ClientCard
                  key={i}
                  card={card}
               />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default OurClients;
