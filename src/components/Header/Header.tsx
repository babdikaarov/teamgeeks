import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

const HeaderComponent = lazy(() => import("./HeaderComponent"));

const Header = () => {
   const { pathname } = useLocation();
   return (
      <Suspense>
         <HeaderComponent bandPage={!pathname.includes("studio")} />
      </Suspense>
   );
};

export default Header;
