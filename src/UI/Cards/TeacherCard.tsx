import { FC } from "react";
import { socialIcons } from "../socialLinks/icons";
import styles from "./cards/_teachersCard.module.scss";
import { TeacherCardProps } from "./types";

const TeacherCard: FC<TeacherCardProps> = (props) => {
   const { img, name, expertise, instagram, description } = props;
   return (
      <div className={styles.cardContainer}>
         <div className={styles.imageContainer}>
            <img src={img} alt={name} />
            <a href={instagram}>{socialIcons.instagram}</a>
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
