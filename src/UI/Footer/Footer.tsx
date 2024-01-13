import { useEffect, useState } from "react";
import FooterTemplate from "./FooterTemplate";
import { useLocation } from "react-router-dom";
import backendData from "./backend.json";

const Footer = () => {
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
   return <FooterTemplate backendData={backendData} bandPage={bandPage} />;
};

export default Footer;
