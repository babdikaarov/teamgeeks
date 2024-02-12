import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import styles from "./_feedbackCard.module.scss";

const StudentsFeedbackCard: React.FC<Card.FeedbackCardProps> = ({ img, name, word }) => {
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
