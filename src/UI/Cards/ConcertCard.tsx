import { CardProps } from "./types";
import styles from "./cards/_concertCard.module.scss";

const ConcertCard = (props: CardProps) => {
   return (
      /* FIX_ME add onClick to idImage "./studio/gallery/{$id}" */
      <div className={styles.ConcertsCard}>
         <img className={styles.concertImg} src={props.img} alt="" />
         <div className={styles.concertText}>
            <span>
               <h4>{props.header}</h4>
               <h6>{props.location}</h6>
            </span>
            <h6>{props.month}</h6>
         </div>
      </div>
   );
};

export default ConcertCard;
