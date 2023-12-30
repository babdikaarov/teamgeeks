import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "../../../scss/partials/ui/header/_NavList.module.scss";

interface BandNavListProps {
  lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
  const { pathname } = useLocation();
  return (
    <ul className={styles.navigation}>
      <li>
        <HashLink to={"/#home"} onClick={() => window.scrollTo(0, 0)} className={pathname === "/" ? styles.active : ""}>
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
        <a href={lyrics} target="blank">
          Репертуар
        </a>
      </li>
    </ul>
  );
};

export default BandNavList;
