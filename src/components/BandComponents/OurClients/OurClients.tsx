// import { FC } from "react";
import data from "../../../tempData/getClientsData";
import styles from "../../../scss/partials/coolBand/_ourClient.module.scss";
import ClientCard from "../../../UI/Cards/ClientCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useEffect, useState } from "react";

// interface OurClientsProps {
type ClientCards = {
  src: Promise<typeof import("*.png")>;
  alt: string;
}[];

const OurClients = () => {
  const [images, setImages] = useState<ClientCards>();
  useEffect(() => {
    const loadImages = async () => {
      await new Promise(data).then((imported) => setImages(imported));
    };

    loadImages();
  }, []);

  return (
    <SectionWrapper header={"Наши клиенты"} id="partners" className={styles.ourClients}>
      <article className={styles.clientsArticle}>
        <h2>500+</h2>
        <h3>Более 500 корпоративов и мероприятий</h3>
      </article>
      <div className={styles.clientsCards}>{images?.map((card, i: number) => <ClientCard key={i} card={card} />)}</div>
    </SectionWrapper>
  );
};

export default OurClients;
