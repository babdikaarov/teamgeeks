import { NavLink } from "react-router-dom";
import styles from "./_logo.module.scss";
import blogo from "/logo/blogo.svg";
import slogo from "/logo/slogo.svg";
// import usePageLocation from "../../modules/hooks/usePageLocation";

const Logo: React.FC<Prop.Logo> = ({ id, bandPage, footerHide, onFooter }) => {
   // const {onBand} = usePageLocation()

   return (
      <NavLink
         id={id}
         to={bandPage ? "/" : "/studio"}
         onClick={() => window.scrollTo(0, 0)}
         className={styles.pageLogo}
         data-rotate={true}
      >
         <div className={styles.front}>
            <div className={`${styles.hoverStateBackground} ${styles.mainLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={onFooter ? (bandPage ? blogo : slogo) : blogo}
               alt={"Cool Band"}
            />
         </div>
         <div className={styles.back}>
            <div className={`${styles.hoverStateBackground} ${styles.studioLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={onFooter ? (bandPage ? slogo : blogo) : slogo}
               alt={"Cool Studio"}
            />
         </div>
      </NavLink>
   );
};
export default Logo;
