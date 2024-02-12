// modules
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// components
import BandNavList from "./pageNavigation/BandNavList";
import StudioNavList from "./pageNavigation/StudioNavList";
import HeaderComponent from "./HeaderComponent";
// static
import lyrics from "./staticData.json";

const Header = () => {
   const [bandPage, setBandPage] = useState<boolean>(true);
   const { pathname } = useLocation();
   useEffect(() => {
      if (/^\/(?!studio\b).*$/.test(pathname)) {
         setBandPage(true);
      } else {
         setBandPage(false);
      }
   }, [pathname]);
   return (
      <HeaderComponent
         bandPage={bandPage}
         lyrics={lyrics}
         NavList={bandPage ? BandNavList : StudioNavList}
      />
   );
};

export default Header;
