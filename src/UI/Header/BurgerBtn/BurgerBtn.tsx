import useStudioPath from "../../../app/hooks/useActiveMainPage";
import styles from "./_burger.module.scss";
import { useNavigate } from "react-router-dom";

const BurgerBtn = () => {
   const navigate = useNavigate();
   const isActiveMainPage = useStudioPath();

   return (
      <button
         className={!isActiveMainPage ? styles.studioBtn : styles.bandBtn}
         onClick={() => navigate(!isActiveMainPage ? "/studio" : "/")}
      >
         {!isActiveMainPage ? "Cool Studio" : "Cool Band"}
      </button>
   );
};

export default BurgerBtn;
