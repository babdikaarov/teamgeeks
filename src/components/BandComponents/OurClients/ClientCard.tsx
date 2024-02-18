import styles from "./_clientCard.module.scss";

const ClientCard: React.FC<Slice.IClients> = ({ image, url }) => {
   function checkFileExtension(src: string): string {
      console.log(src);
      const regex = /\.png$/;
      return src && regex.test(src) ? styles.png : styles.NoPng;
   }

   return (
      <a
         href={url}
         target="blank"
      >
         <img
            className={styles.clientCard + " " + checkFileExtension(image)}
            src={image}
            alt={image}
         />
      </a>
   );
};

export default ClientCard;
