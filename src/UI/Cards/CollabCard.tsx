import { FC } from "react";
import styles from "../../scss/partials/ui/cards/_collabCard.module.scss";
interface CollabCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  firstName: string;
  lastName: string;
}

const CollabCard: FC<CollabCardProps> = ({ src, alt, firstName, lastName, ...props }) => {
  return (
    <div className={styles.collabCardContainer} {...props}>
      <img src={src} alt={alt} className={styles.collabCard} />
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default CollabCard;
