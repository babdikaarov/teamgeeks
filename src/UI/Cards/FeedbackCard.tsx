import styles from "../../components/StudioComponents/StudentsFeedback/_studentsFeedback.module.scss";

type CardProps = {
   img: string;
   name: string;
   word: string;
};

const StudentsFeedbackCard = (card: CardProps) => {
   return (
      <div className={styles.StudentsFeedbackCard}>
         <img src={card.img} />
         <div className={styles.StudentsText}>
            <div className={styles.StudentsName}>{card.name}</div>
            <div className={styles.StudentsWord}>{card.word}</div>
         </div>
      </div>
   );
};

export default StudentsFeedbackCard;