import { FC } from "react";
import styles from "./_backdrop.module.scss";

interface BackdropProps {
   onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
   return (
      <span
         className={styles.backdrop}
         onClick={onClick}
      ></span>
   );
};

export default Backdrop;
