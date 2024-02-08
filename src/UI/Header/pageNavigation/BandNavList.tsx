import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import styles from "./_NavList.module.scss";
import { BandNavListProps } from "./types";
import { useAppSelector } from "../../../app/hooks";
import { EBlockID } from "../../../types";

const BandNavList: React.FC<BandNavListProps> = ({ lyrics, setIsMenuOpen }) => {
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
               className={activeNavigation.focusOn === EBlockID.Main ? styles.active : ""}
            >
               Главная
            </HashLink>
         </li>
         <li>
            <HashLink
               to={`/#${EBlockID.About}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.About ? styles.active : ""}
            >
               О нас
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/gallery"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.Gallery ? styles.active : ""}
            >
               Галерея
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/#collaboration"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.Collab ? styles.active : ""}
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
