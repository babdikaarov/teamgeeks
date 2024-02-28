// modules
import { HashLink } from "react-router-hash-link";
import { useAppSelector } from "../../../app/hooks";
import { EBlockID } from "../../../globalTypesEnum";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import styles from "./_NavList.module.scss";
import { useLocation } from "react-router-dom";

const StudioNavList: React.FC<Prop.Header.NavListProps> = ({ setIsMenuOpen }) => {
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);
   const { pathname } = useLocation();

   const handleFunction = () => {
      pathname.includes("studio") && mainElementAnimation();
      setIsMenuOpen(false);
   };

   return (
      <ul
         className={styles.navigation}
         data-navigation="studio"
      >
         <li className="rotateNavigation">
            <HashLink
               to={`/studio#${EBlockID.ABOUTSTUDIO}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.ABOUTSTUDIO ? styles.active : ""}
            >
               О студии
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/studio#${EBlockID.COURSES}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.COURSES ? styles.active : ""}
            >
               Направления
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/studio#${EBlockID.TEACHERS}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.TEACHERS ? styles.active : ""}
            >
               Преподаватели
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/studio#${EBlockID.STUDENTS}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.STUDENTS ? styles.active : ""}
            >
               Ученики
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/${EBlockID.GALLERYSTUDIO}`}
               onClick={() => {
                  handleFunction();
                  window.scroll(0, 0);
               }}
               className={
                  activeNavigation.focusOn === EBlockID.GALLERYSTUDIO || activeNavigation.focusOn === EBlockID.CONCERT
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
