import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { lyrics, tempLinks } from "../../tempData/getHeaderData";
import BandNavList from "./pageNavigation/BandNavList";
import StudioNavList from "./pageNavigation/StudioNavList";
import HeaderTemplate from "./HeaderTemplate";

const Header = () => {
  const [bandPage, setBandPage] = useState<boolean>(true);
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log(pathname);
    if (pathname === "/") {
      setBandPage(true);
    } else if (pathname === "/studio") {
      setBandPage(false);
    }
  }, [pathname]);
  return (
    <HeaderTemplate
      bandPage={bandPage}
      lyrics={lyrics}
      links={tempLinks}
      NavList={bandPage ? BandNavList : StudioNavList}
    />
  );
};

export default Header;
