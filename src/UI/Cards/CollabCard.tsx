import styles from "./cards/_collabCard.module.scss";
import { CollabCardProps } from "./types";

const CollabCard: React.FC<CollabCardProps> = ({ src, alt, firstName, lastName, ...props }) => {
   return (
      <div
         className={styles.cardContainer}
         {...props}
      >
         <img
            src={src}
            alt={alt}
            className={styles.cardImage}
         />
         <p>
            {firstName} {lastName}
         </p>
      </div>
   );
};

export default CollabCard;
