// modules
import { useNavigate } from "react-router-dom";
import useStudioPath from "../../../modules/hooks/useActiveMainPage";
import mainElementAnimation from "../../../modules/mainElementAnimation";
// styles
import styles from "./_burger.module.scss";

const BurgerBtn = ({ toggleMenu }: { toggleMenu: () => void }) => {
   const navigate = useNavigate();

   const isActiveMainPage = useStudioPath();
   const handleClick = () => {
      mainElementAnimation();
      toggleMenu();
      navigate(!isActiveMainPage ? "/studio" : "/");
   };
   return (
      <button
         className={!isActiveMainPage ? styles.studioBtn : styles.bandBtn}
         onClick={handleClick}
      >
         {!isActiveMainPage ? "Cool Studio" : "Cool Band"}
      </button>
   );
};

export default BurgerBtn;
