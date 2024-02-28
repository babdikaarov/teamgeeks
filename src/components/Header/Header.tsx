import { Suspense, lazy } from "react";
import lyrics from "./staticData.json";
import { useLocation } from "react-router-dom";
// import { logoAnimation } from "../../modules/transition";

const BandNavList = lazy(() => import("./pageNavigation/BandNavList"));
const StudioNavList = lazy(() => import("./pageNavigation/StudioNavList"));
const HeaderComponent = lazy(() => import("./HeaderComponent"));

const Header = () => {
   const { pathname } = useLocation();
   // useEffect(()=>{
   //    logoAnimation(pathname.includes('studio'))
   // // eslint-disable-next-line react-hooks/exhaustive-deps
   // },[])
   return (
      <Suspense>
         <HeaderComponent
            bandPage={!pathname.includes("studio")}
            lyrics={lyrics}
            NavList={!pathname.includes("studio") ? BandNavList : StudioNavList}
         />
      </Suspense>
   );
};

export default Header;
