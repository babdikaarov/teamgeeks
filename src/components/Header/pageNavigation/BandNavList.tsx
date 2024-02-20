import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAppSelector } from "../../../app/hooks";
import { EBlockID } from "../../../globalTypesEnum";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import styles from "./_NavList.module.scss";

const BandNavList: React.FC<Prop.Header.NavListProps> = ({ lyrics, setIsMenuOpen }) => {
   const { pathname } = useLocation();
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);

   const onBand = pathname === "/";

   const handleFunction = useCallback(() => {
      if (!onBand) {
         mainElementAnimation();
      }
      setIsMenuOpen(false);
   }, [onBand, setIsMenuOpen]);

   return (
      <ul className={styles.navigation}>
         <li>
            <HashLink
               to={"/#home"}
               onClick={() => {
                  handleFunction();
                  window.scroll(0, 0);
               }}
               className={activeNavigation.focusOn === EBlockID.MAIN ? styles.active : ""}
            >
               Главная
            </HashLink>
         </li>
         <li>
            <HashLink
               to={`/#${EBlockID.ABOUT}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.ABOUT ? styles.active : ""}
            >
               О нас
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/gallery"}
               onClick={() => {
                  handleFunction();
                  window.scroll(0, 0);
               }}
               className={activeNavigation.focusOn === EBlockID.GALLERY ? styles.active : ""}
            >
               Галерея
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/#collaboration"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.COLLAB ? styles.active : ""}
            >
               Коллаборация
            </HashLink>
         </li>
         <li>
            <a
               href={lyrics}
               target="_blank"
               rel="noopener noreferrer"
            >
               Репертуар
            </a>
         </li>
      </ul>
   );
};

export default BandNavList;
