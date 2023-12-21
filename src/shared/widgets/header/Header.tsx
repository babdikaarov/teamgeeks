import SocialLinks from "../../UI/socialLinks/SocialLinks";
import { FC } from "react";
import Logo from "../../UI/logo/Logo";
import { useLocation } from "react-router-dom";

type logos = {
   bandLogo: Logo;
   studioLogo: Logo;
};
type lyrics = {
   lyrics: string;
};
interface HeaderProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   pageLogos: logos;
   lyrics: string;
   NavList: FC<lyrics>;
}

const Header: FC<HeaderProps> = ({ links, pageLogos, lyrics, NavList }) => {
   const { bandLogo, studioLogo } = pageLogos;
   const { pathname } = useLocation();

   return (
      <header className="header">
         <Logo logo={pathname !== "/studio" ? bandLogo : studioLogo} />
         <nav className="header-nav">
            <NavList lyrics={lyrics} />
            <SocialLinks links={links} />
         </nav>
         <Logo logo={pathname == "/studio" ? bandLogo : studioLogo} />
      </header>
   );
};

export default Header;
