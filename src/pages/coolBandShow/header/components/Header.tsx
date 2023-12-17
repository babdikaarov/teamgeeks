import { HashLink } from "react-router-hash-link";
import Language from "../../../../shared/UI/language/Language";
import LogoCB from "../../../../shared/UI/logoCB/LogoCB";
import LogoCS from "../../../../shared/UI/logoCS/LogoCS";
import SocialLinks from "../../../../shared/UI/socialLinks/SocialLinks";
import { NavLink } from "react-router-dom";

function Header() {
   return (
      <header>
         <LogoCB />
         <nav className="header-nav">
            <ul className="navigation">
               <li>
                  <HashLink to={"#about"}>О нас</HashLink>
               </li>
               <li>
                  <NavLink to={"/gallery"}>Галерея</NavLink>
               </li>
               <li>
                  <HashLink to={"/#collab"}>Коллаборация</HashLink>
               </li>
               <li>
                  <a href="#">Репертуар</a>
               </li>
            </ul>
            <SocialLinks />
            <Language />
         </nav>
         <LogoCS />
      </header>
   );
}

export default Header;
