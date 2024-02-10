import styles from "./cards/_feedbackCard.module.scss";
import { FeedbackCardProps } from "./types";
import ImageLoader from "../ImageLoader/ImageLoader";

const StudentsFeedbackCard: React.FC<FeedbackCardProps> = ({ img, name, word }) => {
   return (
      <div className={styles.StudentsFeedbackCard}>
         <div className={styles.image}>
            <ImageLoader src={img} />
         </div>
         <div className={styles.StudentsText}>
            <div className={styles.StudentsName}>{name}</div>
            <div className={styles.StudentsWord}>{word}</div>
         </div>
      </div>
   );
};

export default StudentsFeedbackCard;
