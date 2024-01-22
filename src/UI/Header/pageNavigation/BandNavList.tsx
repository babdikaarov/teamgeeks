import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./_NavList.module.scss";

interface BandNavListProps {
   lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
   const { pathname } = useLocation();
   const onBand = pathname === "/";
   const [isMenuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
      setMenuOpen(false);
   };

   return (
      <div>
         {isMenuOpen && <Backdrop onClick={closeMenu} />}
         <ul className={styles.navigation}>
            <li>
               <HashLink
                  to={"/#home"}
                  onClick={() => !onBand && mainElementAnimation()}
                  className={onBand ? styles.active : ""}
               >
                  Главная
               </HashLink>
            </li>
            <li>
               <HashLink to={"/#about"} onClick={() => !onBand && mainElementAnimation()}>
                  О нас
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/gallery"}
                  onClick={() => onBand && mainElementAnimation()}
                  className={!onBand ? styles.active : ""}
               >
                  Галерея
               </HashLink>
            </li>
            <li>
               <HashLink to={"/#collaboration"} onClick={() => !onBand && mainElementAnimation()}>
                  Коллаборация
               </HashLink>
            </li>
            <li>
               <a href={lyrics} target="blank">
                  Репертуар
               </a>
            </li>
         </ul>
         <button onClick={toggleMenu}></button>
      </div>
   );
};

export default BandNavList;
