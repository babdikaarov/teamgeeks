import { Link, useLocation } from "react-router-dom";
import styles from "./_topButtons.module.scss";
import { mainElementAnimation } from "../../../modules/transition";

const TopButtons = () => {
   const { pathname } = useLocation();

   return (
      <div className={styles.navButtons}>
         <Link
            to=""
            className={!pathname.includes("studio") ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}
            onClick={() => {
               mainElementAnimation();
            }}
         >
            <p>Cool Band</p>
         </Link>
         <Link
            to="/studio"
            className={
               pathname.includes("studio") ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive
            }
            onClick={() => {
               mainElementAnimation();
            }}
         >
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
