import styles from "./_topButtons.module.scss";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
   return (
      <div className={styles.topButtons}>
         <NavLink to={"/"}>
            <button className={!activeButton ? styles.topButtonsMainActive : styles.topButtonsMainNotActive}>
               Cool Band
            </button>
         </NavLink>
         <NavLink to={"/studio"}>
            <button className={activeButton ? styles.topButtonsSecondaryActive : styles.topButtonsSecondaryNotActive}>
               Cool Studio
            </button>
         </NavLink>
      </div>
   );
};

export default TopButtons;
