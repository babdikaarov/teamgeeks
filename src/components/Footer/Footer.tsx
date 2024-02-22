// modules
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// components
import FooterComponent from "./FooterComponent";
import { useAppSelector } from "../../app/hooks";

const Footer = () => {
   const [bandPage, setBandPage] = useState<boolean>(true);
   const coursesListData = useAppSelector((state) => state.getCourses.data)!;
   const contactDetailsData = useAppSelector((state) => state.getContacts.data)!;
   const data = {
      coursesList: coursesListData.map((el) => el.name),
      contactDetails: contactDetailsData,
   };

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
         backendData={data}
         bandPage={bandPage}
      />
   );
};

export default Footer;
