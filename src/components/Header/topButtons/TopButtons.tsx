import { Link } from "react-router-dom";
import styles from "./_topButtons.module.scss";
import { mainElementAnimation, logoAnimation } from "../../../modules/transition";
import usePageLocation from "../../../modules/hooks/usePageLocation";

const TopButtons = () => {
   const { onBand, onStudio } = usePageLocation();

   return (
      <div className={styles.navButtons}>
         <Link
            to=""
            className={onBand ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}
            onClick={() => {
               mainElementAnimation(), !onBand && logoAnimation(onStudio);
            }}
         >
            <p>Cool Band</p>
         </Link>
         <Link
            to="/studio"
            className={onStudio ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive}
            onClick={() => {
               mainElementAnimation(), !onStudio && logoAnimation(onStudio);
            }}
         >
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
