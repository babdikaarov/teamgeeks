// modules
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import { useAppSelector } from "../../../app/hooks";
// styles
import styles from "./_NavList.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";

const BandNavList: React.FC<Prop.Header.NavListProps> = ({ lyrics, setIsMenuOpen }) => {
   const { pathname } = useLocation();
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);

   const onBand = pathname === "/";

   const handleFunction = () => {
      !onBand && mainElementAnimation();
      setIsMenuOpen(false);
   };

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
                  handleFunction(), window.scroll(0, 0);
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
               target="blank"
            >
               Репертуар
            </a>
         </li>
      </ul>
   );
};

export default BandNavList;
