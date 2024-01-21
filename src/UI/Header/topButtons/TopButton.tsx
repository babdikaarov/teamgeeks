import styles from "./_topButton.module.scss";
// import burgerIcon from "../../../assets/Vector.svg";
import icon from "./icon";
import useStudioPath from "../../../app/hooks/useActiveMainPage";

interface TopButtonProps {
   isMenuOpen: boolean;
   toggleMenu: () => void;
}

const TopButton: React.FC<TopButtonProps> = ({ isMenuOpen, toggleMenu }) => {
   const isActiveMainPage = useStudioPath();
   return (
      <>
         <label className={styles.label + " " + (isActiveMainPage ? styles.blue : styles.yellow)}>
            {!isActiveMainPage ? "Cool Band" : "Cool Studio"}
            <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} className={styles.input}></input>
            {icon}
         </label>
      </>
   );
};

export default TopButton;
