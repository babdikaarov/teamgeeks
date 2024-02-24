import usePageLocation from "../../../modules/hooks/usePageLocation";
import styles from "./_topButton.module.scss";
import icon from "./icon";

// FIX_ME try to animate burger icon

const TopButton: React.FC<Prop.Header.TopButtonProps> = ({ isMenuOpen, toggleMenu }) => {
   const { onBand } = usePageLocation();
   return (
      <>
         <label className={styles.label + " " + (onBand ? styles.yellow : styles.blue)}>
            {onBand ? "Cool Band" : "Cool Studio"}
            <input
               type="checkbox"
               checked={isMenuOpen}
               onChange={toggleMenu}
               className={styles.input}
            ></input>
            {icon}
         </label>
      </>
   );
};

export default TopButton;
