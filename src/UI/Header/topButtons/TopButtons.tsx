import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const TopButtons = () => {
   const { pathname } = useLocation();
   const [activeButton, setActiveButton] = useState<boolean>();
   useEffect(() => {
      const studioPathRegex = /^\/studio($|\/.*|#.*)/;

      if (studioPathRegex.test(pathname)) {
         setActiveButton(true);
      } else {
         setActiveButton(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);
   return (
      <div className="top-buttons">
         <NavLink to={"/"}>
            <button className={`top-buttons-main-${!activeButton ? "active" : "notActive"}`}>Cool Band</button>
         </NavLink>
         <NavLink to={"/studio"}>
            <button className={`top-buttons-secondary-${activeButton ? "active" : "notActive"}`}>Cool Studio</button>
         </NavLink>
      </div>
   );
};

export default TopButtons;
