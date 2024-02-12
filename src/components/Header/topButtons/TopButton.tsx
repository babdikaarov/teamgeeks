import styles from "./_topButton.module.scss";
import icon from "./icon";
import useStudioPath from "../../../modules/hooks/useActiveMainPage";

// FIX_ME try to animate burger icon

const TopButton: React.FC<Prop.Header.TopButtonProps> = ({ isMenuOpen, toggleMenu }) => {
   const isActiveMainPage = useStudioPath();
   return (
      <>
         <label className={styles.label + " " + (isActiveMainPage ? styles.blue : styles.yellow)}>
            {!isActiveMainPage ? "Cool Band" : "Cool Studio"}
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
