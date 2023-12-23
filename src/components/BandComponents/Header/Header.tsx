import styles from "../../../scss/partials/coolBand/_header.module.scss";
import SocialLinks from "../../../UI/Header/socialLinks/SocialLinks";
import { FC, useEffect, useState } from "react";
import Logo from "../../../UI/Header/logo/Logo";
import { useLocation } from "react-router-dom";
import TopButtons from "../../../UI/Header/topButtons/TopButtons";

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
        <Logo logo={logoToDisplay} />
        <nav className={styles.headerNav}>
          <NavList lyrics={lyrics} />
          <SocialLinks links={links} />
        </nav>
      </header>
      <TopButtons />
    </>
  );
};

export default Header;
