import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "../header/_NavList.module.scss";
import mainElementAnimation from "../../../modules/mainElementAnimation";

interface BandNavListProps {
  lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
  const { pathname } = useLocation();
  const onBand = pathname === "/";

  return (
    <ul className={styles.navigation}>
      <li>
        <HashLink
          to={"/#home"}
          onClick={() => !onBand && mainElementAnimation()}
          className={onBand ? styles.active : ""}
        >
          Главная
        </HashLink>
      </li>
      <li>
        <HashLink to={"/#about"} onClick={() => !onBand && mainElementAnimation()}>
          О нас
        </HashLink>
      </li>
      <li>
        <HashLink
          to={"/gallery"}
          onClick={() => onBand && mainElementAnimation()}
          className={!onBand ? styles.active : ""}
        >
          Галерея
        </HashLink>
      </li>
      <li>
        <HashLink to={"/#collaboration"} onClick={() => !onBand && mainElementAnimation()}>
          Коллаборация
        </HashLink>
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
