// components
import FooterComponent from "./FooterComponent";
import { useAppSelector } from "../../app/hooks";
import { useLocation } from "react-router-dom";

const Footer = () => {
   const { pathname } = useLocation();
   const coursesListData = useAppSelector((state) => state.getCourses.data)!;
   const contactDetailsData = useAppSelector((state) => state.getContacts.data)!;
   const data = {
      coursesList: coursesListData.map((el) => el.name),
      contactDetails: contactDetailsData,
   };

   return <FooterComponent backendData={data} bandPage={!pathname.includes("studio")} />;
};

export default Footer;
