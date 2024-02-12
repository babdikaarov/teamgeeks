import styles from "./_coursesCard.module.scss";

const CoursesCard: React.FC<Card.CoursesCard> = ({ src, title }) => {
   return (
      <div className={styles.courseCardContainer}>
         <img
            src={src}
            alt={title}
         />
         <h6>{title}</h6>
      </div>
   );
};

export default CoursesCard;
