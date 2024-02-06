import styles from "./cards/_coursesCard.module.scss";

interface CoursesCardProps {
   src: string;
   title: string;
}
const CoursesCard: React.FC<CoursesCardProps> = ({ src, title }) => {
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
