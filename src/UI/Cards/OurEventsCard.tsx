import { FC } from "react";
import styles from "./cards/_ourEventsCard.module.scss";
interface OurEventsCardProps {
  src: string;
  alt: string;
}

const OurEventsCard: FC<OurEventsCardProps> = ({ src, alt }) => {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};

export default OurEventsCard;
