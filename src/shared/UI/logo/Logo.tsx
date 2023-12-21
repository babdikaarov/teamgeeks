import { FC } from "react";
import { NavHashLink } from "react-router-hash-link";
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
      <NavHashLink to={mainLogo ? "/" : "/studio"}>
         <div className={`page-logo `}>
            <div className="hover-state-background" style={radialGradient}></div>
            <img src={src} alt={alt} />
         </div>
      </NavHashLink>
   );
};
export default Logo;
