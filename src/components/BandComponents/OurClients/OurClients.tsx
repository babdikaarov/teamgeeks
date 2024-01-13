import data from "../../../tempData/getClientsData";
import styles from "./_ourClient.module.scss";
import ClientCard from "../../../UI/Cards/ClientCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import staticData from "./staticData.json";

const OurClients = () => {
   return (
      <SectionWrapper header={staticData.header} id={staticData.scrollID} className={styles.ourClients}>
         <article className={styles.clientsArticle}>
            <h2>{staticData.h2}</h2>
            <h4>{staticData.h4}</h4>
         </article>
         <div className={styles.clientsCards}>
            {data.map((card, i: number) => (
               <ClientCard key={i} card={card} />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default OurClients;
