import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../scss/partials/ui/_logo.module.scss";
import blogo from "../../assets/logo/blogo.svg";
import slogo from "../../assets/logo/slogo.svg";

type Logo = {
  mainLogo: boolean;
  color: string;
  src: string;
  alt: string;
};
interface LogoProps {
  bandPage: boolean;
}

const Logo: FC<LogoProps> = ({ bandPage }) => {
  // const { src, alt, mainLogo } = logo;

  return (
    <NavLink to={bandPage ? "/" : "/studio"} onClick={() => window.scrollTo(0, 0)} className={styles.pageLogo}>
      <div className={`${styles.hoverStateBackground} ${!bandPage ? styles.studioLogo : styles.mainLogo}`}></div>
      <img src={bandPage ? blogo : slogo} alt={bandPage ? "Cool Band" : "Cool Studio"} />
    </NavLink>
  );
};
export default Logo;
