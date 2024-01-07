import styles from "./_teachersCard.module.scss";
import { socialIcons } from "../socialLinks/icons";
import { FC } from "react";

interface TeacherCardProps {
  img: string;
  name: string;
  expertise: string;
  instagram: string;
  description: string;
}

const TeacherCard: FC<TeacherCardProps> = ({ ...card }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={card.img} alt={card.name} />
        <a href={card.instagram}>{socialIcons.instagram}</a>
      </div>
      <article>
        <h5>{card.name}</h5>
        <h6>{card.expertise}</h6>
        <p>{card.description}</p>
      </article>
    </div>
  );
};

export default TeacherCard;
