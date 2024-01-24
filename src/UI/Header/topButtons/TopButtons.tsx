import { Link } from "react-router-dom";
import styles from "./_topButtons.module.scss";
// import mainElementAnimation from "../../../modules/mainElementAnimation";
import bodyElementAnimation from "../../../modules/bodyElementAnimation";
import useStudioPath from "../../../modules/hooks/useActiveMainPage";

const TopButtons = () => {
   const isActiveMainPage = useStudioPath();

   return (
      <div className={styles.navButtons}>
         <Link
            to=""
            className={!isActiveMainPage ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}
            onClick={() => isActiveMainPage && bodyElementAnimation()}
         >
            <p>Cool Band</p>
         </Link>
         <Link
            to="/studio"
            className={isActiveMainPage ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive}
            onClick={() => !isActiveMainPage && bodyElementAnimation()}
         >
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
