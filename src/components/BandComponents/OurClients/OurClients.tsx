// import { FC } from "react";
import data from "../../../tempData/getClientsData";
import styles from "../../../scss/partials/coolBand/_ourClient.module.scss";
import ClientCard from "../../../UI/Cards/ClientCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";

// interface OurClientsProps {
//   clientCards: {
//     src: string;
//     alt: string;
//   }[];
// }
const OurClients = () => {
  return (
    <SectionWrapper header={"Наши клиенты"} id="partners" className={styles.ourClients}>
      <article className={styles.clientsArticle}>
        <h2>500+</h2>
        <h3>Более 500 корпоративов и мероприятий</h3>
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
