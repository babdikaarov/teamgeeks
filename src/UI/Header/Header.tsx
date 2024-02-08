import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { lyrics } from "../../tempData/getHeaderData";
import BandNavList from "./pageNavigation/BandNavList";
import StudioNavList from "./pageNavigation/StudioNavList";
import HeaderTemplate from "./HeaderTemplate";

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
      <HeaderTemplate
         bandPage={bandPage}
         lyrics={lyrics}
         NavList={bandPage ? BandNavList : StudioNavList}
      />
   );
};

export default Header;
