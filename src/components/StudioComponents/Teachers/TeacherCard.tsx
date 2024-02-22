import { socialIcons } from "../../../assets/icons/socialIcons";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import styles from "./_teachersCard.module.scss";

const TeacherCard: React.FC<Card.TeacherCardProps> = (props) => {
   const { img, name, expertise, instagram, description, bluer } = props;
   const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(instagram, "_blank");
   };

   return (
      <div className={styles.cardContainer}>
         <div className={styles.imageContainer}>
            <ImageLoader
               src={img}
               bluer={bluer}
            />
            <a
               href={instagram}
               target="blank"
               onClick={handleInstagramClick}
            >
               {socialIcons.instagram}
            </a>
         </div>
         <article>
            <h5>{name}</h5>
            <h6>{expertise}</h6>
            <p>{description}</p>
         </article>
      </div>
   );
};

export default TeacherCard;
