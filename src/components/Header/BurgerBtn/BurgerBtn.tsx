// modules
import { useNavigate } from "react-router-dom";
// import mainElementAnimation from "../../../modules/mainElementAnimation";
// styles
import styles from "./_burger.module.scss";
import usePageLocation from "../../../modules/hooks/usePageLocation";

const BurgerBtn = ({ toggleMenu }: { toggleMenu: () => void }) => {
   const navigate = useNavigate();
   const { onBand } = usePageLocation();
   const handleClick = () => {
      // mainElementAnimation();
      toggleMenu();
      navigate(onBand ? "/studio" : "/");
   };
   return (
      <button
         className={onBand ? styles.studioBtn : styles.bandBtn}
         onClick={handleClick}
      >
         {onBand ? "Cool Studio" : "Cool Band"}
      </button>
   );
};

export default BurgerBtn;
