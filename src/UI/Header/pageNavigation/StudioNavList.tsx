// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
// import Backdrop from "../Backdrop/Backdrop";
import styles from "./_NavList.module.scss";

const BandNavList = () => {
   const { pathname } = useLocation();
   const onStudio = pathname === "/studio";
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
               <HashLink to={"/studio#about"} onClick={() => !onStudio && mainElementAnimation()}>
                  О студии
               </HashLink>
            </li>
            <li>
               <HashLink to={"/studio#courses"} onClick={() => !onStudio && mainElementAnimation()}>
                  Направления
               </HashLink>
            </li>
            <li>
               <HashLink to={"/studio#teachers"} onClick={() => !onStudio && mainElementAnimation()}>
                  Преподаватели
               </HashLink>
            </li>
            <li>
               <HashLink to={"/studio#students"} onClick={() => !onStudio && mainElementAnimation()}>
                  Ученики
               </HashLink>
            </li>
            <li>
               <HashLink to={"/studio/gallery"} onClick={() => onStudio && mainElementAnimation()}>
                  Концерты
               </HashLink>
            </li>
         </ul>
         {/* <button onClick={toggleMenu}>asdasdasd</button> */}
      </>
   );
};

export default BandNavList;
