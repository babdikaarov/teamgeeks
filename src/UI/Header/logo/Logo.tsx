import styles from "./_logo.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
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
   const { color, src, alt, mainLogo } = logo;

   const radialGradient = {
      background: `radial-gradient(69.21% 74.92% at 0% 106.05%, ${color} 13.34%, ${color} 41.83%, ${color} 63.51%, ${color} 90.88%)`,
   };

   return (
      <NavLink to={mainLogo ? "/" : "/studio"} onClick={() => window.scrollTo(0, 0)}>
         <div className={styles.pageLogo}>
            <div className={styles.hoverStateBackground} style={radialGradient}></div>
            <img src={src} alt={alt} />
         </div>
      </NavLink>
   );
};
export default Logo;
