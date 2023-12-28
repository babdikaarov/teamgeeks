import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./_logo.module.scss";

type Logo = {
  mainLogo: boolean;
  color: string;
  src: string;
  alt: string;
};
interface LogoProps {
  logo: Logo;
}

const Logo: FC<LogoProps> = ({ logo }) => {
  const { src, alt, mainLogo } = logo;

  return (
    <NavLink to={mainLogo ? "/" : "/studio"} onClick={() => window.scrollTo(0, 0)} className={styles.pageLogo}>
      <div className={`${styles.hoverStateBackground} ${!mainLogo ? styles.studioLogo : styles.mainLogo}`}></div>
      <img src={src} alt={alt} />
    </NavLink>
  );
};
export default Logo;
