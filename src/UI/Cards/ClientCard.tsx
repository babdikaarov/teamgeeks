import { FC } from "react";
import styles from "../../scss/partials/ui/cards/_clientCard.module.scss";
interface ClientCardProps {
   card: {
      src: string;
      alt: string;
   };
}

const ClientCard: FC<ClientCardProps> = ({ card }) => {
   function checkFileExtension(src: string): string {
      const regex = /\.png$/;
      return regex.test(src) ? styles.png : styles.NoPng;
   }
   return <img className={styles.clientCard + checkFileExtension(card.src)} src={card.src} alt={card.alt}></img>;
};

export default ClientCard;
