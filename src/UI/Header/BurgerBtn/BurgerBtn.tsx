import useStudioPath from "../../../modules/hooks/useActiveMainPage";
// import bodyElementAnimation from "../../../modules/bodyElementAnimation";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import styles from "./_burger.module.scss";
import { useNavigate } from "react-router-dom";

interface BurgerBtnProps {
   toggleMenu: () => void;
}

const BurgerBtn: React.FC<BurgerBtnProps> = ({ toggleMenu }) => {
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
