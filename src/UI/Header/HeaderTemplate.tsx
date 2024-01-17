import { FC, useState } from "react";
import Logo from "../Logo/Logo";
import SocialLinks from "../socialLinks/SocialLinks";
import TopButtons from "./topButtons/TopButtons";
import styles from "./_header.module.scss";
import styles2 from "./header/_NavList.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import BurgerBtn from "./BurgerBtn/BurgerBtn.tsx";

type lyrics = {
  lyrics: string;
};

interface HeaderTemplateProps {
  links: {
    telegram: string;
    whatsapp: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  bandPage: boolean;
  lyrics: string;
  NavList: FC<lyrics>;
}

const HeaderTemplate: FC<HeaderTemplateProps> = ({ links, bandPage, lyrics, NavList }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <header className={pathname === "/" ? styles.header : styles.headerStudio}>
        {pathname === "/" ? (
          <span className={styles.textBand} onClick={() => navigate("/")}>
            Cool Show Band
          </span>
        ) : (
          <span className={styles.textStudio} onClick={() => navigate("/studio")}>
            Cool Studio
          </span>
        )}
        {pathname === "/" ? (
          <span onClick={() => setMenuActive(true)} className={styles.yellow}></span>
        ) : (
          <span onClick={() => setMenuActive(true)} className={styles.white}></span>
        )}
        <nav className={menuActive ? [styles.menu, styles.active].join(" ") : styles.menu}>
          <Logo bandPage={bandPage} />
          <NavList lyrics={lyrics} />
          {pathname === "/" ? (
            <span onClick={() => setMenuActive(false)} className={styles2.yellowClose}></span>
          ) : (
            <span onClick={() => setMenuActive(false)} className={styles2.whiteClose}></span>
          )}
          <SocialLinks links={links} />
          <BurgerBtn pathname={pathname} />
        </nav>
        <TopButtons />
      </header>
    </>
  );
};

export default HeaderTemplate;
