import { Outlet } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";

function CoolBandShow() {
   return (
      <>
         <HeaderContainer />
         <Outlet />
      </>
   );
}

export default CoolBandShow;
