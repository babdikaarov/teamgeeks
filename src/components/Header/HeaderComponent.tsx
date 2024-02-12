import { useState } from "react";
import Logo from "../../UI/Logo/Logo.tsx";
import SocialLinks from "../../UI/Social/SocialLinks.tsx";
import BurgerBtn from "./BurgerBtn/BurgerBtn.tsx";
import styles from "./_header.module.scss";
import TopButton from "./topButtons/TopButton.tsx";
import TopButtons from "./topButtons/TopButtons.tsx";

const HeaderComponent: React.FC<Prop.Header.HeaderComponentProps> = ({ bandPage, lyrics, NavList }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className={styles.header}>
         <TopButton
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
         />
         <nav className={styles.nav + " " + (isMenuOpen && styles.open)}>
            <span
               className={styles.close}
               onClick={toggleMenu}
            ></span>
            <Logo bandPage={bandPage} />
            <NavList
               lyrics={lyrics}
               {...{ setIsMenuOpen }}
            />
            <SocialLinks {...{ setIsMenuOpen }} />
            <BurgerBtn toggleMenu={toggleMenu} />
         </nav>
         <TopButtons />
      </header>
   );
};

export default HeaderComponent;
