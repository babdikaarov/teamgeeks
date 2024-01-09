import { FC, HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import styles from "./_logo.module.scss";
import blogo from "/logo/blogo.svg";
import slogo from "/logo/slogo.svg";

type Logo = {
  mainLogo: boolean;
  color: string;
  src: string;
  alt: string;
};
interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  bandPage: boolean;
  footerHide?: string;
}

const Logo: FC<LogoProps> = ({ bandPage, footerHide }) => {
  // const { src, alt, mainLogo } = logo;

  return (
    <NavLink
      to={bandPage ? "/" : "/studio"}
      onClick={() => window.scrollTo(0, 0)}
      className={styles.pageLogo + " " + footerHide}
    >
      <div className={`${styles.hoverStateBackground} ${!bandPage ? styles.studioLogo : styles.mainLogo}`}></div>
      <img src={bandPage ? blogo : slogo} alt={bandPage ? "Cool Band" : "Cool Studio"} />
    </NavLink>
  );
};
export default Logo;
