import styles from "./_concertCard.module.scss";

const ConcertCard = (props: Card.ConcertCardProps) => {
   return (
      /* FIX_ME add onClick to idImage "./studio/gallery/{$id}" */
      <div className={styles.ConcertsCard}>
         <img
            className={styles.concertImg}
            src={props.img}
            alt=""
         />
         <div className={styles.concertText}>
            <span>
               <div className={styles.h4}>{props.header}</div>
               <div className={styles.h6}>{props.location}</div>
            </span>
            <div className={styles.h6}>{props.month}</div>
         </div>
      </div>
   );
};

export default ConcertCard;
