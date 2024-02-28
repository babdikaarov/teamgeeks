import { NavLink, useLocation } from "react-router-dom";
import styles from "./_logo.module.scss";
import blogo from "/logo/blogo.svg";
import slogo from "/logo/slogo.svg";

const Logo: React.FC<Prop.Logo> = ({ id, bandPage, footerHide, onFooter }) => {
   const { pathname } = useLocation();

   return (
      <NavLink
         id={id}
         to={bandPage ? "/" : "/studio"}
         onClick={() => window.scrollTo(0, 0)}
         className={styles.pageLogo}
         data-rotate={!pathname.includes("studio")}
      >
         <div className={styles.front}>
            <div className={`${styles.hoverStateBackground} ${styles.mainLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={onFooter ? (!pathname.includes("studio") ? blogo : slogo) : blogo}
               alt={"Cool Band"}
            />
         </div>
         <div className={styles.back}>
            <div className={`${styles.hoverStateBackground} ${styles.studioLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={onFooter ? (!pathname.includes("studio") ? slogo : blogo) : slogo}
               alt={"Cool Studio"}
            />
         </div>
      </NavLink>
   );
};
export default Logo;
