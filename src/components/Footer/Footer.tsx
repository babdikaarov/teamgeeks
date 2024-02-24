// components
import FooterComponent from "./FooterComponent";
import { useAppSelector } from "../../app/hooks";
import usePageLocation from "../../modules/hooks/usePageLocation";


const Footer = () => {
   const {onBand} = usePageLocation()
   const coursesListData = useAppSelector((state) => state.getCourses.data)!;
   const contactDetailsData = useAppSelector((state) => state.getContacts.data)!;
   const data = {
      coursesList: coursesListData.map((el) => el.name),
      contactDetails: contactDetailsData,
   };

   return (
      <FooterComponent
         backendData={data}
         bandPage={onBand}
      />
   );
};

export default Footer;
