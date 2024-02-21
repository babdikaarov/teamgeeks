import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import lyrics from "./staticData.json";

const BandNavList = lazy(() => import("./pageNavigation/BandNavList"));
const StudioNavList = lazy(() => import("./pageNavigation/StudioNavList"));
const HeaderComponent = lazy(() => import("./HeaderComponent"));

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
      <Suspense fallback={<div>Loading...</div>}>
         <HeaderComponent
            bandPage={bandPage}
            lyrics={lyrics}
            NavList={bandPage ? BandNavList : StudioNavList}
         />
      </Suspense>
   );
};

export default Header;
