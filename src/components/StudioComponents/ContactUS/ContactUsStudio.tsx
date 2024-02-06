import SharedButton from "../../../UI/buttons/SharedButton";
import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import staticData from "./staticData.json";
// import backendData from "./backendData.json";
// import createWhatsAppLink from "../../../modules/createWhatsAppLink";
import contacts from "../../../tempData/contacts.json";

const ContactUsStudio = () => {
   // const whatsapp = createWhatsAppLink(backendData.whatsapp.link, backendData.whatsapp.text);

   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         button={
            <SharedButton
               whatsapp={contacts.studioNumber}
               classname="studioTeachersButton"
               text="Связаться с нами"
            />
         }
      />
   );
};

export default ContactUsStudio;
