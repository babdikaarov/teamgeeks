import { useNavigate } from "react-router-dom";
import styles from "./_concertCard.module.scss";

const ConcertCard = (props: Card.ConcertCardProps) => {
   const navigate = useNavigate();
   return (
      <div
         className={styles.ConcertsCard}
         onClick={() => navigate(`/studio/gallery/${props.id}`)}
      >
         <img
            className={styles.concertImg}
            src={props.coverImage}
            alt="event poster"
         />
         <div className={styles.concertText}>
            <span>
               <div className={styles.h4}>{props.name}</div>
               <div className={styles.h6}>{props.location}</div>
            </span>
            <div className={styles.h6}>{props.date}</div>
         </div>
      </div>
   );
};

export default ConcertCard;
