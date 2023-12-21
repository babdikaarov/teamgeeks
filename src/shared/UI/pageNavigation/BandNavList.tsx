import { FC } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

interface BandNavListProps {
   lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
   return (
      <ul className="navigation">
         <li>
            <NavHashLink to={"/#home"} className={({ isActive }) => (isActive ? "active" : "")}>
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
            <HashLink to={"/#collab"}>Коллаборация</HashLink>
         </li>
         <li>
            <a href={lyrics}>Репертуар</a>
         </li>
      </ul>
   );
};

export default BandNavList;
