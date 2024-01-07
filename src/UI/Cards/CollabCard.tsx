import { FC } from "react";
import styles from "./cards/_collabCard.module.scss";
interface CollabCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  firstName: string;
  lastName: string;
  view: string;
}

const CollabCard: FC<CollabCardProps> = ({ src, alt, firstName, lastName, view = "portrait", ...props }) => {
  return (
    <div>
      <div className={styles.collabCardContainer} {...props}>
        <div className={styles.collabCard + " " + styles[view]}>
          <img src={src} alt={alt} />
        </div>
        <p>
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};

export default CollabCard;
