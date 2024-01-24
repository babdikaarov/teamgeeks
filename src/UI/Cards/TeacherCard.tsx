import { FC } from "react";
import { socialIcons } from "../socialLinks/icons";
import styles from "./cards/_teachersCard.module.scss";
import { TeacherCardProps } from "./types";
import { useState } from "react";

const TeacherCard: FC<TeacherCardProps> = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

   const { img, name, expertise, instagram, description } = props;
   return (
      <div className={styles.cardContainer}>
         <div className={styles.imageContainer}>
            {!imageLoaded && (
               <div className={styles.loadingBox}>
               </div>
            )}
            <img 
               src={img} 
               alt={name} 
               onLoad={() => setImageLoaded(true)}
               style={{ opacity: imageLoaded ? 1 : 0 }}
            />
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
