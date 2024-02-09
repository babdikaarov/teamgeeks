// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
// import Backdrop from "../Backdrop/Backdrop";
import styles from "./_NavList.module.scss";
import { StudioNavListProps } from "./types";
import { useAppSelector } from "../../../app/hooks";
import { EBlockID } from "../../../types";

const StudioNavList: React.FC<StudioNavListProps> = ({ setIsMenuOpen }) => {
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);
   const { pathname } = useLocation();
   const onStudio = pathname === "/studio";

   const handleFunction = () => {
      !onStudio && mainElementAnimation();
      setIsMenuOpen(false);
   };

   return (
      <ul className={styles.navigation}>
         <li>
            <HashLink
               to={"/studio#about"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.AboutStudio ? styles.active : ""}
            >
               О студии
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#courses"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.Courses ? styles.active : ""}
            >
               Направления
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#teachers"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.Teachers ? styles.active : ""}
            >
               Преподаватели
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#students"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.Students ? styles.active : ""}
            >
               Ученики
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio/gallery"}
               onClick={handleFunction}
               className={
                  activeNavigation.focusOn === EBlockID.GalleryStudio || activeNavigation.focusOn === EBlockID.Concert
                     ? styles.active
                     : ""
               }
            >
               Концерты
            </HashLink>
         </li>
      </ul>
   );
};

export default StudioNavList;
