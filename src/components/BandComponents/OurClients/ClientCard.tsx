import styles from "./_clientCard.module.scss";

const ClientCard: React.FC<Slice.IClients> = ({ image, url }) => {
 

   return (
      <a
         href={url}
         target="blank"
      >
         <img
            className={styles.clientCard}
            src={image}
            alt={image}
         />
      </a>
   );
};

export default ClientCard;
