import React, { useCallback, useState, lazy } from "react";
import Logo from "../../UI/Logo/Logo.tsx";
import SocialLinks from "../../UI/Social/SocialLinks.tsx";
import BurgerBtn from "./BurgerBtn/BurgerBtn.tsx";
import styles from "./_header.module.scss";
import TopButton from "./topButtons/TopButton.tsx";
import TopButtons from "./topButtons/TopButtons.tsx";
import { useMediaQuery } from "../../modules/hooks/useMediaQuery.ts";
const BandNavList = lazy(() => import("./pageNavigation/BandNavList"));
const StudioNavList = lazy(() => import("./pageNavigation/StudioNavList"));

const HeaderComponent: React.FC<Prop.Header.HeaderComponentProps> = React.memo(({ bandPage, lyrics }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const isDesctop = useMediaQuery("(min-width: 1024px)");
   console.log(isDesctop);

   const toggleMenu = useCallback(() => {
      setIsMenuOpen((prevState) => !prevState);
   }, []);

   return (
      <header className={styles.header}>
         <TopButton
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
         />
         <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            <span
               className={styles.close}
               onClick={toggleMenu}
            ></span>
            <Logo
               bandPage={bandPage}
               id="logoRotate"
            />
            <div
               id="navigaionContainer"
               data-navlist-animation={bandPage ? "band" : "studio"}
            >
               {isDesctop ? (
                  <>
                     <BandNavList
                        lyrics={lyrics}
                        {...{ setIsMenuOpen }}
                     />
                     <StudioNavList
                        lyrics={lyrics}
                        {...{ setIsMenuOpen }}
                     />
                  </>
               ) : bandPage ? (
                  <BandNavList
                     lyrics={lyrics}
                     {...{ setIsMenuOpen }}
                  />
               ) : (
                  <StudioNavList
                     lyrics={lyrics}
                     {...{ setIsMenuOpen }}
                  />
               )}
            </div>
            <SocialLinks {...{ setIsMenuOpen }} />
            <BurgerBtn toggleMenu={toggleMenu} />
         </nav>
         <TopButtons />
      </header>
   );
});

export default HeaderComponent;
