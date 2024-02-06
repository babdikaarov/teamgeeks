// import { useState } from "react";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
// import Backdrop from "../Backdrop/Backdrop";
import styles from "./_NavList.module.scss";

interface BandNavListProps {
   setIsMenuOpen: (isOpen: boolean) => void;
}

const BandNavList: FC<BandNavListProps> = ({ setIsMenuOpen }) => {
   const { pathname } = useLocation();
   const onStudio = pathname === "/studio";

   const handleFunction = () => {
      !onStudio && mainElementAnimation();
      setIsMenuOpen(false);
   };

   // const [isMenuOpen, setMenuOpen] = useState(false);

   // const toggleMenu = () => {
   //    setMenuOpen(!isMenuOpen);
   // };

   // const closeMenu = () => {
   //    setMenuOpen(false);
   // };

   return (
      <>
         {/* {isMenuOpen && <Backdrop onClick={closeMenu} />} */}
         <ul className={styles.navigation}>
            <li>
               <HashLink
                  to={"/studio#about"}
                  onClick={handleFunction}
               >
                  О студии
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/studio#courses"}
                  onClick={handleFunction}
               >
                  Направления
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/studio#teachers"}
                  onClick={handleFunction}
               >
                  Преподаватели
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/studio#students"}
                  onClick={handleFunction}
               >
                  Ученики
               </HashLink>
            </li>
            <li>
               <HashLink
                  to={"/studio/gallery"}
                  onClick={handleFunction}
               >
                  Концерты
               </HashLink>
            </li>
         </ul>
         {/* <button onClick={toggleMenu}>asdasdasd</button> */}
      </>
   );
};

export default BandNavList;
