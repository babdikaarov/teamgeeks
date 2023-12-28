import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import SocialLinks from "./socialLinks/SocialLinks";
import TopButtons from "./topButtons/TopButtons";
import styles from "./_header.module.scss";
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
  const [logoToDisplay, setLogoToDIsplay] = useState<Logo>(bandLogo);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == "/studio") {
      setLogoToDIsplay(studioLogo);
    } else if (pathname === "/") {
      setLogoToDIsplay(bandLogo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <Logo logo={logoToDisplay} />
          <NavList lyrics={lyrics} />
          <SocialLinks links={links} />
        </nav>
        <TopButtons />
      </header>
    </>
  );
};

export default Header;
