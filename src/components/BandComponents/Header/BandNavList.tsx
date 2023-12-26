import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "../../../scss/partials/coolBand/_bandNavList.module.scss";
import { useLocation } from "react-router-dom";

interface BandNavListProps {
   lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
   const { pathname } = useLocation();
   console.log(pathname);

   return (
      <ul className={styles.navigation}>
         <li>
            <HashLink
               to={"/#home"}
               onClick={() => window.scrollTo(0, 0)}
               className={pathname === "/" ? styles.active : ""}
            >
               Главная
            </HashLink>
         </li>
         <li>
            <HashLink to={"/#about"}>О нас</HashLink>
         </li>
         <li>
            <HashLink
               to={"/gallery"}
               onClick={() => window.scrollTo(0, 0)}
               className={pathname === "/gallery" ? styles.active : ""}
            >
               Галерея
            </HashLink>
         </li>
         <li>
            <HashLink to={"/#collaboration"}>Коллаборация</HashLink>
         </li>
         <li>
            <a href={lyrics}>Репертуар</a>
         </li>
      </ul>
   );
};

export default BandNavList;
