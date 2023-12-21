import { Outlet } from "react-router";
import HeaderStudioContainer from "./header/HeaderStudioContainer";

function CoolStudio() {
   return (
      <>
         <HeaderStudioContainer />
         <Outlet />
      </>
   );
}

export default CoolStudio;
