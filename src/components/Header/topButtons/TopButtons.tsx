import { Link } from "react-router-dom";
import styles from "./_topButtons.module.scss";
// import mainElementAnimation from "../../../modules/mainElementAnimation";
import bodyElementAnimation from "../../../modules/bodyElementAnimation";
import usePageLocation from "../../../modules/hooks/usePageLocation";

const TopButtons = () => {
   const { onBand, onStudio } = usePageLocation();

   return (
      <div className={styles.navButtons}>
         <Link
            to=""
            className={onBand ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}
            onClick={() => onStudio && bodyElementAnimation()}
         >
            <p>Cool Band</p>
         </Link>
         <Link
            to="/studio"
            className={onStudio ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive}
            onClick={() => onBand && bodyElementAnimation()}
         >
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
