// modules
import SharedButton from "../../../UI/Buttons/SharedButton";
import ContactUsTemplate from "../../../UI/Contact/ContactUsTemplate";
// static
import staticData from "./staticData.json";
import { useAppSelector } from "../../../app/hooks";

const ContactUsStudio = () => {
   const { studioNumber } = useAppSelector((state) => state.getContacts.data)!;

   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         button={
            <SharedButton
               whatsapp={studioNumber}
               classname="studioTeachersButton"
               text="Связаться с нами"
            />
         }
      />
   );
};

export default ContactUsStudio;
