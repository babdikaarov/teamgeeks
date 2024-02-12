import styles from "./_clientCard.module.scss";

const ClientCard: React.FC<Card.ClientCardProps> = ({ card }) => {
   function checkFileExtension(src: string): string {
      const regex = /\.png$/;
      return src && regex.test(src) ? styles.png : styles.NoPng;
   }

   return (
      <a
         href={card.link}
         target="blank"
      >
         <img
            className={styles.clientCard + " " + checkFileExtension(card.src)}
            src={card.src}
            alt={card.alt}
         />
      </a>
   );
};

export default ClientCard;
