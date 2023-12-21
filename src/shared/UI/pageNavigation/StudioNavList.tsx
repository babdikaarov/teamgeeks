import { HashLink, NavHashLink } from "react-router-hash-link";

const BandNavList = () => {
   return (
      <ul className="navigation">
         <li>
            <NavHashLink to={"/studio"} className={({ isActive }) => (isActive ? "active" : "")}>
               Главная
            </NavHashLink>
         </li>
         <li>
            <HashLink to={"/studio#about"}>О студии</HashLink>
         </li>
         <li>
            <HashLink to={"/studio#majors"}>Направления</HashLink>
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
