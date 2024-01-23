import Logo from "../Logo/Logo";
import SocialLinks from "../socialLinks/SocialLinks";
import TopButtons from "./topButtons/TopButtons";
import styles from "./_header.module.scss";
import BurgerBtn from "./BurgerBtn/BurgerBtn.tsx";
import TopButton from "./topButtons/TopButton.tsx";
import { HeaderTemplateProps } from "./types.ts";
import { useState } from "react";

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ links, bandPage, lyrics, NavList }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <header className={styles.header}>
            <TopButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <nav className={styles.nav + " " + (isMenuOpen && styles.open)}>
               <span className={styles.close} onClick={toggleMenu}></span>
               <Logo bandPage={bandPage} />
               <NavList lyrics={lyrics} />
               <SocialLinks links={links} />
               <BurgerBtn toggleMenu={toggleMenu} />
            </nav>
            <TopButtons />
         </header>
      </>
   );
};

export default HeaderTemplate;
