// modules
import SharedButton from "../../../UI/Buttons/SharedButton";
import ContactUsTemplate from "../../../UI/Contact/ContactUsTemplate";
// static
import staticData from "./staticData.json";
import backendData from "./backendData.json"; // FIX_ME remove backendData.json replace with backend

const ContactUsStudio = () => {
   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         button={
            <SharedButton
               whatsapp={backendData.whatsapp.link.toString()}
               classname="studioTeachersButton"
               text="Связаться с нами"
            />
         }
      />
   );
};

export default ContactUsStudio;
