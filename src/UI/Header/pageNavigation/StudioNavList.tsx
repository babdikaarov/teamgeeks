import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "../../../scss/partials/ui/header/_NavList.module.scss";

const BandNavList = () => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.navigation}>
      <li>
        <HashLink to={"/studio"} className={pathname === "/studio" ? styles.active : ""}>
          Главная
        </HashLink>
      </li>
      <li>
        <HashLink to={"/studio#about"}>О студии</HashLink>
      </li>
      <li>
        <HashLink to={"/studio#courses"}>Направления</HashLink>
      </li>
      <li>
        <HashLink to={"/studio#teachers"}>Преподаватели</HashLink>
      </li>
      <li>
        <HashLink to={"/studio#students"}>Ученики</HashLink>
      </li>
      <li>
        <HashLink to={"/studio#concerts"}>Концерты</HashLink>
      </li>
    </ul>
  );
};

export default BandNavList;
