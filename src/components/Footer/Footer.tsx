// modules
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// components
import FooterComponent from "./FooterComponent";
import backendData from "./backend.json"; //FIX_ME replace with backend

const Footer = () => {
   const [bandPage, setBandPage] = useState<boolean>(true);
   const { pathname } = useLocation();
   useEffect(() => {
      if (pathname === "/") {
         setBandPage(true);
      } else if (pathname === "/studio") {
         setBandPage(false);
      }
   }, [pathname]);
   return (
      <FooterComponent
         backendData={backendData}
         bandPage={bandPage}
      />
   );
};

export default Footer;
