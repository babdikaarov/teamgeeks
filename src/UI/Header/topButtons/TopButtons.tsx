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
  return (
    <div className={styles.navButtons}>
      <Link to="/" className={!activeButton ? styles.navButtonsMainActive : styles.navButtonsMainNotActive}>
        <p>Cool Band</p>
      </Link>
      <Link
        to="/studio"
        className={activeButton ? styles.navButtonsSecondaryActive : styles.navButtonsSecondaryNotActive}
      >
        <p>Cool Studio</p>
      </Link>
    </div>
  );
};

export default TopButtons;
