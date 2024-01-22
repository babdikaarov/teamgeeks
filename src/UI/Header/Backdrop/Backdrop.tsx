import { FC } from "react";
import styles from "./_backdrop.module.scss";

interface BackdropProps {
   onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
   return <div className={styles.backdrop} onClick={onClick}></div>;
};

export default Backdrop;
