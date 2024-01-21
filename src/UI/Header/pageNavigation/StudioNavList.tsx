import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "../header/_NavList.module.scss";
import mainElementAnimation from "../../../modules/mainElementAnimation";

const BandNavList = () => {
   const { pathname } = useLocation();
   const onStudio = pathname === "/studio";

   return (
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
   );
};

export default BandNavList;
