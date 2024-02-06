import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
// import Backdrop from "../Backdrop/Backdrop";
import styles from "./_NavList.module.scss";

interface BandNavListProps {
   lyrics: string;
   setIsMenuOpen: (isOpen: boolean) => void;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics, setIsMenuOpen }) => {
   const { pathname } = useLocation();
   const onBand = pathname === "/";

   const handleFunction = () => {
      !onBand && mainElementAnimation();
      setIsMenuOpen(false);
   };

   return (
      <>
         {/* {isMenuOpen && <Backdrop onClick={closeMenu} />} */}
         <ul className={styles.navigation}>
            <li>
               <HashLink
                  to={"/#home"}
                  onClick={handleFunction}
                  className={onBand ? styles.active : ""}
               >
                  Главная
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/#about"}
                  onClick={handleFunction}
               >
                  О нас
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/gallery"}
                  onClick={handleFunction}
                  className={!onBand ? styles.active : ""}
               >
                  Галерея
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/#collaboration"}
                  onClick={handleFunction}
               >
                  Коллаборация
               </HashLink>
            </li>
            <li>
               <a
                  href={lyrics}
                  target="blank"
               >
                  Репертуар
               </a>
            </li>
         </ul>
         {/* <button onClick={toggleMenu}></button> */}
      </>
   );
};

export default BandNavList;
