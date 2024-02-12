import { socialIcons } from "../../../assets/icons/socialIcons";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import styles from "./_teachersCard.module.scss";

const TeacherCard: React.FC<Card.TeacherCardProps> = (props) => {
   const { img, name, expertise, instagram, description } = props;
   return (
      <div className={styles.cardContainer}>
         <div className={styles.imageContainer}>
            <ImageLoader src={img} />
            {/* FIX_ME BUG upon anchor click modal window is opening   */}
            <a
               href={instagram}
               target="blank"
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
