import styles from "./_coursesCard.module.scss";

const CoursesCard: React.FC<Card.CoursesCard> = ({ src, title }) => {
   return (
      <div className={styles.courseCardContainer}>
         <img src={src} alt={title} />
         <div className={styles.h6}>{title}</div>
      </div>
   );
};

export default CoursesCard;
