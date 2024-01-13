import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";
import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import staticData from "./staticData.json";
import backendData from "./backendData.json";
import createWhatsAppLink from "../../../modules/createWhatsAppLink";

const ContactUsStudio = () => {
   const whatsapp = createWhatsAppLink(backendData.whatsapp.link, backendData.whatsapp.text);

   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         button={<StudioContactUsButton whatsapp={whatsapp} />}
      />
   );
};

export default ContactUsStudio;
