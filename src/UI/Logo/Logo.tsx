import { Link, useLocation } from "react-router-dom";
import styles from "./_logo.module.scss";
import blogo from "/logo/blogo.svg";
import slogo from "/logo/slogo.svg";

const Logo: React.FC<Prop.Logo> = ({ id, footerHide }) => {
   const { pathname } = useLocation();
   
   return (
      <div
         id={id}
         className={styles.pageLogo}
         data-rotate={!pathname.includes("studio")}
      >
         <Link
         to={"/"}

          className={styles.front} onClick={()=>window.scrollTo(0,0)}
          >
            <div className={`${styles.hoverStateBackground} ${styles.mainLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={blogo}
               alt={"Cool Band"}
            />
         </Link>
         <Link
            to={"/studio"}
          className={styles.back}
          onClick={()=> window.scrollTo(0,0)} >
            <div className={`${styles.hoverStateBackground} ${styles.studioLogo} ${footerHide}`}></div>
            <img
               className={styles.CoolIcons}
               src={slogo}
               alt={"Cool Studio"}
            />
         </Link>
      </div>
   );
};
export default Logo;
