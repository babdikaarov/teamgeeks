import { FC } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import styles from "../../../scss/partials/coolBand/_bandNavList.module.scss";

interface BandNavListProps {
  lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavHashLink
          to={"/#home"}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => window.scrollTo(0, 0)}
        >
          Главная
        </NavHashLink>
      </li>
      <li>
        <HashLink to={"/#about"}>О нас</HashLink>
      </li>
      <li>
        <NavHashLink to={"/gallery"}>Галерея</NavHashLink>
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
