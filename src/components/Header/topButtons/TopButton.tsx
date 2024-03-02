import { useLocation } from "react-router-dom";
import styles from "./_topButton.module.scss";
import icon from "./icon";

// FIX_ME try to animate burger icon

const TopButton: React.FC<Prop.Header.TopButtonProps> = ({ isMenuOpen, toggleMenu }) => {
   const { pathname } = useLocation();
   return (
      <>
         <label htmlFor="topButton" aria-label="buttom"  className={styles.label + " " + (!pathname.includes("studio") ? styles.yellow : styles.blue)}>
            {!pathname.includes("studio") ? "Cool Band" : "Cool Studio"}
            {icon}
         </label>
            <input id="topButton" aria-label="buttom" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} className={styles.input}></input>
      </>
   );
};

export default TopButton;
