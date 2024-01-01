import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../../scss/partials/ui//buttons/_topButtons.module.scss";
const TopButtons = () => {
   const { pathname } = useLocation();
   const [activeButton, setActiveButton] = useState<boolean>();
   useEffect(() => {
      const studioPathRegex = /^\/studio($|\/.*|#.*)/;

      if (studioPathRegex.test(pathname)) {
         setActiveButton(true);
      } else {
         setActiveButton(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);

   const pageAnimation = () => {
      const target = document.getElementsByTagName("main")[0];
      target.classList.add("fade");
      window.scroll(0, 0);
      setTimeout(() => {
         target.classList.remove("fade");
      }, 300);
   };

   return (
      <div className={styles.navButtons}>
         <Link
            to=""
            className={!activeButton ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}
            onClick={pageAnimation}
         >
            <p>Cool Band</p>
         </Link>
         <Link
            to="/studio"
            className={activeButton ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive}
            onClick={pageAnimation}
         >
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
