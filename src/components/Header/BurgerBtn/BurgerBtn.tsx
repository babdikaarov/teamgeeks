// modules
import { useLocation, useNavigate } from "react-router-dom";
import { mainElementAnimation } from "../../../modules/helperFc/transition";
// styles
import styles from "./_burger.module.scss";

const BurgerBtn = ({ toggleMenu }: { toggleMenu: () => void }) => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const handleClick = () => {
      mainElementAnimation();
      toggleMenu();
      navigate(!pathname.includes("studio") ? "/studio" : "/");
   };
   return (
      <button className={!pathname.includes("studio") ? styles.studioBtn : styles.bandBtn} onClick={handleClick}>
         {!pathname.includes("studio") ? "Cool Studio" : "Cool Band"}
      </button>
   );
};

export default BurgerBtn;
