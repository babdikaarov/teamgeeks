import { Outlet } from "react-router-dom";
import Header from "./header/components/Header";

function CoolBandShow() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
}

export default CoolBandShow;
